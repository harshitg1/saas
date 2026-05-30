import Link from "next/link";
import { and, desc, eq, ilike, or, type SQL } from "drizzle-orm";
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
import { db } from "@/lib/db";
import { adminUsers, leads } from "@/lib/db/schema";
import {
  leadPriorityValues,
  leadStatusValues,
} from "@/lib/validation/leads";

export const dynamic = "force-dynamic";

type LeadsPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function paramValue(
  params: Record<string, string | string[] | undefined>,
  key: string,
) {
  const value = params[key];
  return Array.isArray(value) ? value[0] : value;
}

type LeadStatusFilter = (typeof leadStatusValues)[number];
type LeadPriorityFilter = (typeof leadPriorityValues)[number];

function isLeadStatusFilter(value: string): value is LeadStatusFilter {
  return leadStatusValues.includes(value as LeadStatusFilter);
}

function isLeadPriorityFilter(value: string): value is LeadPriorityFilter {
  return leadPriorityValues.includes(value as LeadPriorityFilter);
}

export default async function AdminLeadsPage({ searchParams }: LeadsPageProps) {
  const params = searchParams ? await searchParams : {};
  const q = paramValue(params, "q")?.trim() || "";
  const rawStatus = paramValue(params, "status") || "";
  const rawPriority = paramValue(params, "priority") || "";
  const status = isLeadStatusFilter(rawStatus) ? rawStatus : "";
  const priority = isLeadPriorityFilter(rawPriority) ? rawPriority : "";

  const filters: SQL[] = [];

  if (status) {
    filters.push(eq(leads.status, status));
  }

  if (priority) {
    filters.push(eq(leads.priority, priority));
  }

  if (q) {
    const search = `%${q}%`;
    const searchFilter = or(
      ilike(leads.fullName, search),
      ilike(leads.email, search),
      ilike(leads.phone, search),
      ilike(leads.topic, search),
      ilike(leads.message, search),
    );

    if (searchFilter) {
      filters.push(searchFilter);
    }
  }

  const whereClause =
    filters.length === 0
      ? undefined
      : filters.length === 1
        ? filters[0]
        : and(...filters);

  const rows = await db
    .select({
      lead: leads,
      assignedAdminName: adminUsers.name,
    })
    .from(leads)
    .leftJoin(adminUsers, eq(leads.assignedToId, adminUsers.id))
    .where(whereClause)
    .orderBy(desc(leads.createdAt));

  const total = rows.length;
  const newCount = rows.filter(({ lead }) => lead.status === "new").length;
  const highCount = rows.filter(({ lead }) => lead.priority === "high").length;
  const now = new Date();
  const followUps = rows.filter(
    ({ lead }) => lead.nextFollowUpAt && lead.nextFollowUpAt <= now,
  ).length;

  return (
    <AdminShell active="leads" title="Leads">
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[
          {
            label: "Showing leads",
            value: total,
            icon: UsersRound,
            color: "bg-primary/10 text-primary",
          },
          {
            label: "New",
            value: newCount,
            icon: Flame,
            color: "bg-amber-100 text-amber-800",
          },
          {
            label: "High priority",
            value: highCount,
            icon: Filter,
            color: "bg-red-100 text-red-800",
          },
          {
            label: "Follow-ups due",
            value: followUps,
            icon: CalendarClock,
            color: "bg-primary/10 text-primary",
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.label}
              className="gap-0 rounded-lg border-slate-200 py-0 shadow-sm"
            >
              <CardContent className="flex items-center justify-between gap-3 p-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-3xl font-extrabold text-slate-950">
                    {item.value}
                  </p>
                </div>
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-md ${item.color}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="mt-5 gap-0 rounded-lg border-slate-200 py-0 shadow-sm">
        <form
          action="/admin/leads"
          method="get"
          className="grid gap-3 border-b border-slate-200 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_190px_190px_auto_auto]"
        >
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              name="q"
              defaultValue={q}
              placeholder="Search name, email, phone, topic"
              className="h-11 w-full rounded-md border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm font-medium outline-none transition focus:border-primary focus:bg-white"
            />
          </div>
          <select
            name="status"
            defaultValue={status}
            className="h-11 rounded-md border border-slate-200 bg-slate-50 px-3 text-sm font-bold capitalize outline-none transition focus:border-primary focus:bg-white"
          >
            <option value="">All statuses</option>
            {leadStatusValues.map((value) => (
              <option key={value} value={value}>
                {value.replace("_", " ")}
              </option>
            ))}
          </select>
          <select
            name="priority"
            defaultValue={priority}
            className="h-11 rounded-md border border-slate-200 bg-slate-50 px-3 text-sm font-bold capitalize outline-none transition focus:border-primary focus:bg-white"
          >
            <option value="">All priorities</option>
            {leadPriorityValues.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
          <Button className="h-11" type="submit">
            Filter
          </Button>
          <Button asChild className="h-11" type="button" variant="outline">
            <Link href="/admin/leads">Clear</Link>
          </Button>
        </form>

        <div className="overflow-x-auto">
          <div className="md:min-w-[980px]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 border-b bg-slate-50 px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
              <div className="md:col-span-3">Lead</div>
              <div className="hidden md:block md:col-span-2">Contact</div>
              <div className="hidden md:block md:col-span-2">Stage</div>
              <div className="hidden lg:block lg:col-span-2">Owner</div>
              <div className="hidden lg:block lg:col-span-2">Follow-up</div>
              <div className="md:col-span-1 text-right">Action</div>
            </div>
            {rows.length === 0 ? (
              <div className="px-5 py-14 text-center text-sm text-slate-500">
                No leads found.
              </div>
            ) : (
              rows.map(({ lead, assignedAdminName }) => (
                <Link
                  key={lead.id}
                  href={`/admin/leads/${lead.id}`}
                  className="grid grid-cols-1 md:grid-cols-12 items-start md:items-center gap-3 border-b px-5 py-4 text-sm transition hover:bg-primary/5"
                >
                  <div className="md:col-span-3 min-w-0">
                    <p className="truncate font-extrabold text-slate-950">
                      {lead.fullName}
                    </p>
                    <p className="truncate text-slate-500">{lead.topic}</p>
                    <p className="mt-1 text-xs font-bold text-slate-400">
                      Created {lead.createdAt.toLocaleDateString()}
                    </p>
                  </div>
                  <div className="hidden md:block md:col-span-2 min-w-0 text-slate-700">
                    <p className="truncate font-bold">{lead.phone}</p>
                    <p className="truncate text-xs text-slate-500">
                      {lead.email}
                    </p>
                  </div>
                  <div className="md:col-span-2 flex flex-wrap gap-2">
                    <span className="rounded bg-slate-100 px-2 py-1 text-xs font-bold capitalize text-slate-700">
                      {lead.status.replace("_", " ")}
                    </span>
                    <span
                      className={`rounded px-2 py-1 text-xs font-bold capitalize ${
                        lead.priority === "high"
                          ? "bg-red-50 text-red-700"
                          : lead.priority === "low"
                            ? "bg-slate-100 text-slate-600"
                            : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {lead.priority}
                    </span>
                  </div>
                  <div className="hidden lg:block lg:col-span-2 text-slate-600">
                    <p className="truncate font-bold">
                      {assignedAdminName || "Unassigned"}
                    </p>
                  </div>
                  <div className="hidden lg:block lg:col-span-2 text-slate-600">
                    {lead.nextFollowUpAt ? (
                      <p className="font-bold">
                        {lead.nextFollowUpAt.toLocaleString()}
                      </p>
                    ) : (
                      <p className="text-slate-400">Not scheduled</p>
                    )}
                  </div>
                  <div className="md:col-span-1 flex justify-end">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600">
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </Card>
    </AdminShell>
  );
}
