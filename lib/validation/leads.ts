import { z } from "zod";

const phoneRegex = /^(\+91[\s-]?)?[6-9]\d{9}$/;

export const createLeadSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(120),
  email: z.string().trim().email("Please enter a valid email").max(180),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Please enter a valid Indian contact number"),
  topic: z.string().trim().min(2, "Topic of interest is required").max(160),
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

export const leadStatusValues = [
  "new",
  "contacted",
  "interested",
  "converted",
  "not_interested",
  "closed",
] as const;

export const leadPriorityValues = ["low", "medium", "high"] as const;

export const leadActivityTypeValues = [
  "note",
  "status_change",
  "assignment",
  "call",
  "follow_up",
  "email",
  "close",
] as const;

export const updateLeadSchema = z.object({
  status: z.enum(leadStatusValues).optional(),
  priority: z.enum(leadPriorityValues).optional(),
  assignedToId: z.string().uuid().nullable().optional(),
  nextFollowUpAt: z.string().datetime().nullable().optional(),
});

export const createActivitySchema = z.object({
  type: z.enum(leadActivityTypeValues),
  content: z.string().trim().min(2, "Activity detail is required"),
});
