import Link from "next/link";
import { desc, eq } from "drizzle-orm";
import {
  ArrowUpRight,
  CalendarClock,
  CheckCircle2,
  Flame,
  PhoneCall,
  Target,
  UsersRound,
} from "lucide-react";
import AdminShell from "./admin-shell";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/db";
import { adminUsers, leads } from "@/lib/db/schema";

export const dynamic = "force-dynamic";

const pipeline = [
  "new",
  "contacted",
  "interested",
  "converted",
  "not_interested",
  "closed",
] as const;

export default async function AdminPage() {
  const rows = await db
    .select({
      lead: leads,
      assignedAdminName: adminUsers.name,
    })
    .from(leads)
    .leftJoin(adminUsers, eq(leads.assignedToId, adminUsers.id))
    .orderBy(desc(leads.createdAt));

  const now = new Date();
  const total = rows.length;
  const newLeads = rows.filter(({ lead }) => lead.status === "new").length;
  const active = rows.filter(({ lead }) =>
    ["new", "contacted", "interested"].includes(lead.status),
  ).length;
  const converted = rows.filter(
    ({ lead }) => lead.status === "converted",
  ).length;
  const highPriority = rows.filter(
    ({ lead }) => lead.priority === "high",
  ).length;
  const dueFollowUps = rows.filter(
    ({ lead }) => lead.nextFollowUpAt && lead.nextFollowUpAt <= now,
  ).length;

  const statCards = [
    {
      label: "Total leads",
      value: total,
      icon: UsersRound,
      color: "bg-primary/10 text-primary",
    },
    {
      label: "New enquiries",
      value: newLeads,
      icon: Flame,
      color: "bg-amber-50 text-amber-700",
    },
    {
      label: "Active pipeline",
      value: active,
      icon: Target,
      color: "bg-sky-50 text-sky-700",
    },
    {
      label: "Converted",
      value: converted,
      icon: CheckCircle2,
      color: "bg-green-50 text-green-700",
    },
  ];

  return (
    <AdminShell active="dashboard" title="Dashboard">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => {
          const Icon = card.icon;

          return (
            <Card
              key={card.label}
              className="gap-0 rounded-lg border-slate-200 py-0 shadow-sm"
            >
              <CardContent className="flex items-start justify-between gap-4 p-5">
                <div>
                  <p className="text-sm font-bold text-slate-500">
                    {card.label}
                  </p>
                  <p className="mt-3 text-4xl font-extrabold text-slate-950">
                    {card.value}
                  </p>
                </div>
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-md ${card.color}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
        <Card className="gap-0 rounded-lg border-slate-200 py-0 shadow-sm">
          <CardHeader className="border-b border-slate-100 p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-lg font-extrabold text-slate-950">
                Pipeline Overview
                </CardTitle>
                <CardDescription>
                  Leads grouped by current sales stage.
                </CardDescription>
              </div>
              <Button asChild>
                <Link href="/admin/leads">
                  Open leads
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="grid gap-3 p-5 md:grid-cols-3">
            {pipeline.map((status) => {
              const count = rows.filter(
                ({ lead }) => lead.status === status,
              ).length;
              const percent = total ? Math.round((count / total) * 100) : 0;

              return (
                <div
                  key={status}
                  className="rounded-md border border-slate-200 bg-white p-4"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-extrabold capitalize text-slate-800">
                      {status.replace("_", " ")}
                    </p>
                    <span className="text-sm font-black text-slate-950">
                      {count}
                    </span>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-slate-200">
                    <div
                      className="h-2 rounded-full bg-primary"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs font-bold text-slate-500">
                    {percent}% of all leads
                  </p>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <aside className="space-y-5">
          <Card className="gap-0 rounded-lg border-slate-200 py-0 shadow-sm">
            <CardHeader className="p-5 pb-0">
              <CardTitle className="flex items-center gap-2 text-lg font-extrabold">
                <CalendarClock className="h-5 w-5 text-primary" />
                Follow-up Focus
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3 p-5">
              <div className="rounded-md bg-red-50 p-4">
                <p className="text-3xl font-extrabold text-red-700">
                  {dueFollowUps}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-red-700">
                  Due now
                </p>
              </div>
              <div className="rounded-md bg-amber-50 p-4">
                <p className="text-3xl font-extrabold text-amber-700">
                  {highPriority}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-amber-700">
                  High priority
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="gap-0 rounded-lg border-slate-200 py-0 shadow-sm">
            <CardHeader className="p-5 pb-0">
              <CardTitle className="flex items-center gap-2 text-lg font-extrabold">
                <PhoneCall className="h-5 w-5 text-primary" />
                Recent Leads
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 p-5">
              {rows.slice(0, 5).map(({ lead, assignedAdminName }) => (
                <Link
                  key={lead.id}
                  href={`/admin/leads/${lead.id}`}
                  className="block rounded-md border border-slate-200 p-3 transition hover:border-primary/30 hover:bg-primary/5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-extrabold text-slate-950">
                        {lead.fullName}
                      </p>
                      <p className="truncate text-xs text-slate-500">
                        {lead.topic}
                      </p>
                    </div>
                    <span className="rounded bg-slate-100 px-2 py-1 text-xs font-bold capitalize text-slate-700">
                      {lead.status.replace("_", " ")}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    Owner: {assignedAdminName || "Unassigned"}
                  </p>
                </Link>
              ))}
              {rows.length === 0 && (
                <p className="rounded-md bg-slate-50 p-4 text-sm text-slate-500">
                  No leads yet. Submitted contact forms will appear here.
                </p>
              )}
            </CardContent>
          </Card>
        </aside>
      </div>
    </AdminShell>
  );
}
