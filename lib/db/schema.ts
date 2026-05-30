import {
  index,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const adminRoleEnum = pgEnum("admin_role", ["admin", "manager"]);
export const leadStatusEnum = pgEnum("lead_status", [
  "new",
  "contacted",
  "interested",
  "converted",
  "not_interested",
  "closed",
]);
export const leadPriorityEnum = pgEnum("lead_priority", [
  "low",
  "medium",
  "high",
]);
export const leadActivityTypeEnum = pgEnum("lead_activity_type", [
  "note",
  "status_change",
  "assignment",
  "call",
  "follow_up",
  "email",
  "close",
]);

export const adminUsers = pgTable(
  "admin_users",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    passwordHash: text("password_hash").notNull(),
    role: adminRoleEnum("role").notNull().default("admin"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    emailIdx: index("admin_users_email_idx").on(table.email),
  }),
);

export const leads = pgTable(
  "leads",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    fullName: text("full_name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    topic: text("topic").notNull(),
    message: text("message").notNull(),
    status: leadStatusEnum("status").notNull().default("new"),
    priority: leadPriorityEnum("priority").notNull().default("medium"),
    source: text("source").notNull().default("contact_form"),
    assignedToId: uuid("assigned_to_id").references(() => adminUsers.id, {
      onDelete: "set null",
    }),
    nextFollowUpAt: timestamp("next_follow_up_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    statusIdx: index("leads_status_idx").on(table.status),
    priorityIdx: index("leads_priority_idx").on(table.priority),
    assignedToIdx: index("leads_assigned_to_idx").on(table.assignedToId),
    createdAtIdx: index("leads_created_at_idx").on(table.createdAt),
  }),
);

export const leadActivities = pgTable(
  "lead_activities",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    leadId: uuid("lead_id")
      .notNull()
      .references(() => leads.id, { onDelete: "cascade" }),
    adminUserId: uuid("admin_user_id").references(() => adminUsers.id, {
      onDelete: "set null",
    }),
    type: leadActivityTypeEnum("type").notNull(),
    content: text("content").notNull(),
    metadata: jsonb("metadata").$type<Record<string, unknown>>(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    leadIdx: index("lead_activities_lead_idx").on(table.leadId),
    createdAtIdx: index("lead_activities_created_at_idx").on(table.createdAt),
  }),
);

export type AdminUser = typeof adminUsers.$inferSelect;
export type Lead = typeof leads.$inferSelect;
export type LeadActivity = typeof leadActivities.$inferSelect;
export type LeadStatus = (typeof leadStatusEnum.enumValues)[number];
export type LeadPriority = (typeof leadPriorityEnum.enumValues)[number];
export type LeadActivityType = (typeof leadActivityTypeEnum.enumValues)[number];
