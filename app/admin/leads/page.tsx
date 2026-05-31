import Link from "next/link";
import { and, desc, eq, gte, ilike, lte, or, type SQL } from "drizzle-orm";
import {
  CalendarClock,
  ChevronRight,
  Filter,
  Flame,
  Search,
  UsersRound,
} from "lucide-react";

import AdminShell from "../admin-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { DateRangePicker } from "@/components/date-range-picker";
import { db } from "@/lib/db";
import { adminUsers, leads } from "@/lib/db/schema";
import {
  leadPriorityValues,
  leadStatusValues,
} from "@/lib/validation/leads";

export const dynamic = "force-dynamic";

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */

type LeadsPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function paramValue(
  params: Record<string, string | string[] | undefined>,
  key: string,
) {
  const v = params[key];
  return Array.isArray(v) ? v[0] : v;
}

type LeadStatusFilter   = (typeof leadStatusValues)[number];
type LeadPriorityFilter = (typeof leadPriorityValues)[number];

const isLeadStatusFilter   = (v: string): v is LeadStatusFilter   => leadStatusValues.includes(v as LeadStatusFilter);
const isLeadPriorityFilter = (v: string): v is LeadPriorityFilter => leadPriorityValues.includes(v as LeadPriorityFilter);

const PAGE_SIZE = 10;

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default async function AdminLeadsPage({ searchParams }: LeadsPageProps) {
  const params     = searchParams ? await searchParams : {};
  const q          = paramValue(params, "q")?.trim() || "";
  const rawStatus  = paramValue(params, "status")   || "";
  const rawPriority= paramValue(params, "priority") || "";
  const status     = isLeadStatusFilter(rawStatus)     ? rawStatus   : "";
  const priority   = isLeadPriorityFilter(rawPriority) ? rawPriority : "";
  const fromStr    = paramValue(params, "from") || "";
  const toStr      = paramValue(params, "to")   || "";
  const rawPage    = Number(paramValue(params, "page") || "1");
  const currentPage= isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;

  /* ----- Build Drizzle WHERE clause --------------------------------- */
  const filters: SQL[] = [];

  if (status)   filters.push(eq(leads.status,   status));
  if (priority) filters.push(eq(leads.priority, priority));

  if (fromStr) {
    const d = new Date(`${fromStr}T00:00:00`);
    if (!isNaN(d.getTime())) filters.push(gte(leads.createdAt, d));
  }
  if (toStr) {
    const d = new Date(`${toStr}T23:59:59.999`);
    if (!isNaN(d.getTime())) filters.push(lte(leads.createdAt, d));
  }
  if (q) {
    const like = `%${q}%`;
    const sf = or(
      ilike(leads.fullName, like),
      ilike(leads.email,    like),
      ilike(leads.phone,    like),
      ilike(leads.topic,    like),
      ilike(leads.message,  like),
    );
    if (sf) filters.push(sf);
  }

  const whereClause =
    filters.length === 0 ? undefined :
    filters.length === 1 ? filters[0] :
    and(...filters);

  /* ----- Fetch all matching rows (for stat cards) ------------------- */
  const allRows = await db
    .select({ lead: leads, assignedAdminName: adminUsers.name })
    .from(leads)
    .leftJoin(adminUsers, eq(leads.assignedToId, adminUsers.id))
    .where(whereClause)
    .orderBy(desc(leads.createdAt));

  /* ----- Stat card values ------------------------------------------- */
  const total      = allRows.length;
  const newCount   = allRows.filter(({ lead }) => lead.status === "new").length;
  const highCount  = allRows.filter(({ lead }) => lead.priority === "high").length;
  const now        = new Date();
  const followUps  = allRows.filter(({ lead }) => lead.nextFollowUpAt && lead.nextFollowUpAt <= now).length;

  /* ----- Pagination ------------------------------------------------- */
  const totalPages     = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const safePage       = Math.min(currentPage, totalPages);
  const offset         = (safePage - 1) * PAGE_SIZE;
  const pageRows       = allRows.slice(offset, offset + PAGE_SIZE);

  /* Build page URL preserving all filters */
  const buildUrl = (page: number) => {
    const sp = new URLSearchParams();
    if (q)        sp.set("q",        q);
    if (status)   sp.set("status",   status);
    if (priority) sp.set("priority", priority);
    if (fromStr)  sp.set("from",     fromStr);
    if (toStr)    sp.set("to",       toStr);
    sp.set("page", String(page));
    return `/admin/leads?${sp.toString()}`;
  };

  /* Page number range (max 5 visible) */
  const maxVisible = 5;
  let startPage = Math.max(1, safePage - Math.floor(maxVisible / 2));
  let endPage   = Math.min(totalPages, startPage + maxVisible - 1);
  if (endPage - startPage < maxVisible - 1) startPage = Math.max(1, endPage - maxVisible + 1);
  const pageRange: number[] = [];
  for (let p = startPage; p <= endPage; p++) pageRange.push(p);

  /* ------------------------------------------------------------------ */
  return (
    <AdminShell active="leads" title="Leads">

      {/* ---- Stat cards -------------------------------------------- */}
      <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Showing leads",  value: total,     icon: UsersRound,  color: "bg-primary/10 text-primary"  },
          { label: "New",            value: newCount,  icon: Flame,       color: "bg-amber-100 text-amber-800" },
          { label: "High priority",  value: highCount, icon: Filter,      color: "bg-red-100 text-red-800"     },
          { label: "Follow-ups due", value: followUps, icon: CalendarClock,color:"bg-primary/10 text-primary"  },
        ].map(({ label, value, icon: Icon, color }) => (
          <Card key={label} className="gap-0 rounded-lg border-slate-200 py-0 shadow-sm">
            <CardContent className="flex items-center justify-between gap-3 p-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
                <p className="mt-2 text-3xl font-extrabold text-slate-950">{value}</p>
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-md ${color}`}>
                <Icon className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ---- Filter bar + Table + Pagination ----------------------- */}
      <div className="mt-5 rounded-xl border border-slate-200 bg-white shadow-sm">

        {/* Filter form */}
        <form
          action="/admin/leads"
          method="get"
          className="grid gap-3 border-b border-slate-200 p-4
                     grid-cols-1 sm:grid-cols-2
                     xl:grid-cols-[1fr_240px_160px_160px_auto_auto]"
        >
          {/* Search */}
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              name="q"
              defaultValue={q}
              placeholder="Search name, email, phone, topic…"
              className="h-11 w-full rounded-md border border-slate-200 bg-slate-50 pl-9 pr-3
                         text-sm font-medium outline-none transition
                         focus:border-primary focus:bg-white"
            />
          </div>

          {/* Date range picker */}
          <DateRangePicker defaultFrom={fromStr} defaultTo={toStr} />

          {/* Status */}
          <select
            name="status"
            defaultValue={status}
            className="h-11 rounded-md border border-slate-200 bg-slate-50 px-3
                       text-sm font-bold capitalize outline-none transition
                       focus:border-primary focus:bg-white"
          >
            <option value="">All statuses</option>
            {leadStatusValues.map(v => (
              <option key={v} value={v}>{v.replace("_", " ")}</option>
            ))}
          </select>

          {/* Priority */}
          <select
            name="priority"
            defaultValue={priority}
            className="h-11 rounded-md border border-slate-200 bg-slate-50 px-3
                       text-sm font-bold capitalize outline-none transition
                       focus:border-primary focus:bg-white"
          >
            <option value="">All priorities</option>
            {leadPriorityValues.map(v => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>

          <Button className="h-11" type="submit">Filter</Button>
          <Button asChild variant="outline" className="h-11">
            <Link href="/admin/leads">Clear</Link>
          </Button>
        </form>

        {/* ---- Shadcn Table ---------------------------------------- */}
        <div className="w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-slate-50 hover:bg-slate-50">
                <TableHead className="w-[28%] px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">Lead</TableHead>
                <TableHead className="w-[20%] px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">Contact</TableHead>
                <TableHead className="w-[16%] px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">Stage</TableHead>
                <TableHead className="w-[15%] px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">Owner</TableHead>
                <TableHead className="w-[16%] px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">Follow-up</TableHead>
                <TableHead className="w-[5%]  px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-500 text-right">View</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {pageRows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="py-16 text-center text-sm text-slate-400">
                    No leads match your filters.
                  </TableCell>
                </TableRow>
              ) : (
                pageRows.map(({ lead, assignedAdminName }) => (
                  <TableRow key={lead.id} className="group border-b border-slate-100">
                    {/* Lead */}
                    <TableCell className="px-5 py-4">
                      <Link href={`/admin/leads/${lead.id}`} className="block">
                        <p className="font-extrabold text-slate-900 truncate max-w-[200px] group-hover:text-primary transition-colors">
                          {lead.fullName}
                        </p>
                        <p className="text-xs text-slate-500 truncate max-w-[200px]">{lead.topic}</p>
                        <p className="mt-1 text-xs text-slate-400">
                          Created {lead.createdAt.toLocaleDateString()}
                        </p>
                      </Link>
                    </TableCell>

                    {/* Contact */}
                    <TableCell className="px-5 py-4">
                      <Link href={`/admin/leads/${lead.id}`} className="block">
                        <p className="text-sm font-semibold text-slate-700">{lead.phone}</p>
                        <p className="text-xs text-slate-500 truncate max-w-[180px]">{lead.email}</p>
                      </Link>
                    </TableCell>

                    {/* Stage badges */}
                    <TableCell className="px-5 py-4">
                      <Link href={`/admin/leads/${lead.id}`} className="flex flex-wrap gap-1.5">
                        <span className="inline-flex rounded bg-slate-100 px-2 py-1 text-xs font-bold capitalize text-slate-700">
                          {lead.status.replace("_", " ")}
                        </span>
                        <span className={`inline-flex rounded px-2 py-1 text-xs font-bold capitalize ${
                          lead.priority === "high"  ? "bg-red-50 text-red-700"    :
                          lead.priority === "low"   ? "bg-slate-100 text-slate-600" :
                          "bg-amber-50 text-amber-700"
                        }`}>
                          {lead.priority}
                        </span>
                      </Link>
                    </TableCell>

                    {/* Owner */}
                    <TableCell className="px-5 py-4">
                      <Link href={`/admin/leads/${lead.id}`} className="text-sm font-semibold text-slate-700 block">
                        {assignedAdminName ?? "Unassigned"}
                      </Link>
                    </TableCell>

                    {/* Follow-up */}
                    <TableCell className="px-5 py-4">
                      <Link href={`/admin/leads/${lead.id}`} className="block">
                        {lead.nextFollowUpAt ? (
                          <span className="text-sm font-semibold text-slate-700">
                            {lead.nextFollowUpAt.toLocaleString()}
                          </span>
                        ) : (
                          <span className="text-sm text-slate-400">Not scheduled</span>
                        )}
                      </Link>
                    </TableCell>

                    {/* Arrow */}
                    <TableCell className="px-5 py-4 text-right">
                      <Link
                        href={`/admin/leads/${lead.id}`}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md
                                   border border-slate-200 bg-white text-slate-500
                                   group-hover:border-primary/40 group-hover:text-primary
                                   transition-all shadow-xs"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* ---- Pagination bar -------------------------------------- */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 bg-slate-50/60 px-5 py-4 sm:flex-row">

          {/* Count label */}
          <p className="text-sm text-slate-500">
            {total === 0 ? (
              "No leads found"
            ) : (
              <>
                Showing{" "}
                <span className="font-bold text-slate-800">{offset + 1}</span>
                {" "}–{" "}
                <span className="font-bold text-slate-800">{Math.min(offset + PAGE_SIZE, total)}</span>
                {" "}of{" "}
                <span className="font-bold text-slate-800">{total}</span> leads
              </>
            )}
          </p>

          {/* Page controls */}
          <Pagination className="mx-0 w-auto justify-end">
            <PaginationContent className="gap-1">

              {/* Previous */}
              <PaginationItem>
                <PaginationPrevious
                  href={safePage > 1 ? buildUrl(safePage - 1) : "#"}
                  className={safePage <= 1 ? "pointer-events-none opacity-40" : ""}
                />
              </PaginationItem>

              {/* First page + ellipsis */}
              {startPage > 1 && (
                <>
                  <PaginationItem>
                    <PaginationLink href={buildUrl(1)}>1</PaginationLink>
                  </PaginationItem>
                  {startPage > 2 && (
                    <PaginationItem><PaginationEllipsis /></PaginationItem>
                  )}
                </>
              )}

              {/* Numbered pages */}
              {pageRange.map(page => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href={buildUrl(page)}
                    isActive={page === safePage}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {/* Ellipsis + last page */}
              {endPage < totalPages && (
                <>
                  {endPage < totalPages - 1 && (
                    <PaginationItem><PaginationEllipsis /></PaginationItem>
                  )}
                  <PaginationItem>
                    <PaginationLink href={buildUrl(totalPages)}>{totalPages}</PaginationLink>
                  </PaginationItem>
                </>
              )}

              {/* Next */}
              <PaginationItem>
                <PaginationNext
                  href={safePage < totalPages ? buildUrl(safePage + 1) : "#"}
                  className={safePage >= totalPages ? "pointer-events-none opacity-40" : ""}
                />
              </PaginationItem>

            </PaginationContent>
          </Pagination>
        </div>

      </div>
    </AdminShell>
  );
}
