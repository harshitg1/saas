import Link from "next/link";
import { notFound } from "next/navigation";
import { asc, eq } from "drizzle-orm";
import {
  ArrowLeft,
  CalendarClock,
  Mail,
  MessageSquarePlus,
  Phone,
  Plus,
  UserRound,
} from "lucide-react";
import { addLeadActivityAction, updateLeadAction } from "../../actions";
import AdminShell from "../../admin-shell";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/db";
import { adminUsers, leadActivities, leads } from "@/lib/db/schema";
import {
  leadActivityTypeValues,
  leadPriorityValues,
  leadStatusValues,
} from "@/lib/validation/leads";

export const dynamic = "force-dynamic";

type LeadDetailPageProps = {
  params: Promise<{ id: string }>;
};

/* ── Activity type → dot colour ─────────────────────────────────── */
function dotColor(type: string) {
  switch (type) {
    case "call":          return "bg-sky-500";
    case "email":         return "bg-violet-500";
    case "status_change": return "bg-amber-500";
    case "follow_up":     return "bg-emerald-500";
    case "close":         return "bg-red-500";
    case "assignment":    return "bg-orange-500";
    default:              return "bg-primary";
  }
}

function badgeColor(type: string) {
  switch (type) {
    case "call":          return "bg-sky-50 text-sky-700";
    case "email":         return "bg-violet-50 text-violet-700";
    case "status_change": return "bg-amber-50 text-amber-700";
    case "follow_up":     return "bg-emerald-50 text-emerald-700";
    case "close":         return "bg-red-50 text-red-700";
    case "assignment":    return "bg-orange-50 text-orange-700";
    default:              return "bg-primary/10 text-primary";
  }
}

export default async function LeadDetailPage({ params }: LeadDetailPageProps) {
  const { id } = await params;
  const [leadRow] = await db
    .select({
      lead: leads,
      assignedAdminName: adminUsers.name,
    })
    .from(leads)
    .leftJoin(adminUsers, eq(leads.assignedToId, adminUsers.id))
    .where(eq(leads.id, id))
    .limit(1);

  if (!leadRow) {
    notFound();
  }

  const admins = await db
    .select({
      id: adminUsers.id,
      name: adminUsers.name,
      email: adminUsers.email,
    })
    .from(adminUsers)
    .orderBy(asc(adminUsers.name));

  const activities = await db
    .select({
      activity: leadActivities,
      adminName: adminUsers.name,
    })
    .from(leadActivities)
    .leftJoin(adminUsers, eq(leadActivities.adminUserId, adminUsers.id))
    .where(eq(leadActivities.leadId, id))
    .orderBy(asc(leadActivities.createdAt));

  const lead = leadRow.lead;
  const updateLead  = updateLeadAction.bind(null, lead.id);
  const addActivity = addLeadActivityAction.bind(null, lead.id);

  /* Latest first */
  const timelineItems = [...activities].reverse();

  return (
    <AdminShell active="leads" title={lead.fullName} eyebrow="Lead Record">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/admin/leads"
          className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to leads
        </Link>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_360px]">

          {/* ── Left column ─────────────────────────────────────── */}
          <section className="space-y-5">

            {/* Lead summary card */}
            <Card className="gap-0 rounded-lg border-slate-200 py-0 shadow-sm">
              <CardContent className="p-5">
                <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
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
                        {lead.priority} priority
                      </span>
                    </div>
                    <h2 className="mt-3 text-3xl font-extrabold text-slate-950">
                      {lead.fullName}
                    </h2>
                    <p className="mt-2 text-sm font-bold text-slate-500">
                      {lead.topic}
                    </p>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-3 xl:w-[520px]">
                    <a
                      href={`tel:${lead.phone}`}
                      className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-primary/30 hover:bg-primary/5"
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      Call
                    </a>
                    <a
                      href={`mailto:${lead.email}`}
                      className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-primary/30 hover:bg-primary/5"
                    >
                      <Mail className="h-4 w-4 text-primary" />
                      Email
                    </a>
                    <div className="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700">
                      <UserRound className="h-4 w-4 text-primary" />
                      {leadRow.assignedAdminName || "Unassigned"}
                    </div>
                  </div>
                </div>
                <div className="mt-5 grid gap-3 text-sm md:grid-cols-3">
                  <div className="rounded-md border border-slate-200 p-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Phone</p>
                    <p className="mt-1 font-extrabold text-slate-950">{lead.phone}</p>
                  </div>
                  <div className="rounded-md border border-slate-200 p-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Email</p>
                    <p className="mt-1 truncate font-extrabold text-slate-950">{lead.email}</p>
                  </div>
                  <div className="rounded-md border border-slate-200 p-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Follow-up</p>
                    <p className="mt-1 font-extrabold text-slate-950">
                      {lead.nextFollowUpAt
                        ? lead.nextFollowUpAt.toLocaleString()
                        : "Not scheduled"}
                    </p>
                  </div>
                </div>
                <p className="mt-5 rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                  {lead.message}
                </p>
              </CardContent>
            </Card>

            {/* ── Activity Timeline card ────────────────────────── */}
            <Card className="gap-0 rounded-lg border-slate-200 py-0 shadow-sm">
              <CardHeader className="border-b border-slate-100 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <CardTitle className="text-lg font-extrabold text-slate-950">
                      Activity Timeline
                    </CardTitle>
                    <CardDescription>
                      {timelineItems.length} {timelineItems.length === 1 ? "entry" : "entries"} · latest first
                    </CardDescription>
                  </div>
                  <CalendarClock className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>

              <CardContent className="p-5">
                {timelineItems.length === 0 ? (
                  <p className="rounded-md bg-slate-50 px-4 py-8 text-center text-sm text-slate-400">
                    No activities yet. Add one using the form →
                  </p>
                ) : (
                  <ol>
                    {timelineItems.map(({ activity, adminName }, idx) => {
                      const isLast = idx === timelineItems.length - 1;
                      const d = activity.createdAt;
                      const date = d.toLocaleDateString("en-US", {
                        month: "short",
                        day:   "numeric",
                        year:  "numeric",
                      });
                      const time = d.toLocaleTimeString("en-US", {
                        hour:   "2-digit",
                        minute: "2-digit",
                      });

                      return (
                        <li key={activity.id} className="flex gap-3">

                          {/* Date / time column */}
                          <div className="w-28 shrink-0 pt-0.5 text-right">
                            <p className="text-xs font-semibold text-slate-700 leading-none">{date}</p>
                            <p className="mt-0.5 text-xs text-slate-400">{time}</p>
                          </div>

                          {/* Dot + connector */}
                          <div className="flex flex-col items-center">
                            <span
                              className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ring-2 ring-white ${dotColor(activity.type)}`}
                            />
                            {!isLast && (
                              <span className="mt-1 w-px flex-1 bg-slate-200" />
                            )}
                          </div>

                          {/* Content */}
                          <div className={`min-w-0 flex-1 ${!isLast ? "pb-5" : ""}`}>
                            {/* Single summary line */}
                            <div className="flex flex-wrap items-center gap-2">
                              <span
                                className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-bold capitalize ${badgeColor(activity.type)}`}
                              >
                                {activity.type.replace(/_/g, " ")}
                              </span>
                              <span className="text-xs text-slate-400">
                                by {adminName ?? "System"}
                              </span>
                            </div>
                            {/* Detail */}
                            <p className="mt-1 text-sm leading-relaxed text-slate-600">
                              {activity.content}
                            </p>
                          </div>

                        </li>
                      );
                    })}
                  </ol>
                )}
              </CardContent>
            </Card>

          </section>

          {/* ── Right sidebar ────────────────────────────────────── */}
          <aside className="space-y-5">

            {/* Lead controls */}
            <form
              action={updateLead}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-lg font-extrabold text-slate-950">
                <CalendarClock className="h-5 w-5 text-primary" />
                Lead Controls
              </h2>
              <div className="mt-4 space-y-4">
                <label className="block text-sm font-bold text-slate-700">
                  Status
                  <select
                    name="status"
                    defaultValue={lead.status}
                    className="mt-1 h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm capitalize"
                  >
                    {leadStatusValues.map((value) => (
                      <option key={value} value={value}>
                        {value.replace("_", " ")}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm font-bold text-slate-700">
                  Priority
                  <select
                    name="priority"
                    defaultValue={lead.priority}
                    className="mt-1 h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm capitalize"
                  >
                    {leadPriorityValues.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm font-bold text-slate-700">
                  Assigned Admin
                  <select
                    name="assignedToId"
                    defaultValue={lead.assignedToId || ""}
                    className="mt-1 h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm"
                  >
                    <option value="">Unassigned</option>
                    {admins.map((admin) => (
                      <option key={admin.id} value={admin.id}>
                        {admin.name} ({admin.email})
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm font-bold text-slate-700">
                  Next Follow-up
                  <input
                    name="nextFollowUpAt"
                    type="datetime-local"
                    defaultValue={
                      lead.nextFollowUpAt
                        ? lead.nextFollowUpAt.toISOString().slice(0, 16)
                        : ""
                    }
                    className="mt-1 h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm"
                  />
                </label>
              </div>
              <Button className="mt-5 w-full">Save changes</Button>
            </form>

            {/* Add activity */}
            <form
              action={addActivity}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="flex items-center gap-2 text-lg font-extrabold text-slate-950">
                <MessageSquarePlus className="h-5 w-5 text-primary" />
                Add Activity
              </h2>
              <div className="mt-4 space-y-4">
                <label className="block text-sm font-bold text-slate-700">
                  Type
                  <select
                    name="type"
                    defaultValue="note"
                    className="mt-1 h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm capitalize"
                  >
                    {leadActivityTypeValues.map((value) => (
                      <option key={value} value={value}>
                        {value.replace("_", " ")}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm font-bold text-slate-700">
                  Detail
                  <textarea
                    name="content"
                    required
                    rows={4}
                    className="mt-1 w-full resize-none rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm"
                    placeholder="Called the lead, shared course details..."
                  />
                </label>
              </div>
              <Button className="mt-5 w-full">
                <Plus className="h-4 w-4" />
                Add activity
              </Button>
            </form>

          </aside>
        </div>
      </div>
    </AdminShell>
  );
}
