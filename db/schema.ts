import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = pgTable("contacts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  message: text("message").notNull(),
  created_at: timestamp("created_at").defaultNow(),
});

export const newsletter_subscribers = pgTable("newsletter_subscribers", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: text("email").notNull().unique(),
  created_at: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contacts);
export const selectContactSchema = createSelectSchema(contacts);
export const insertNewsletterSchema = createInsertSchema(newsletter_subscribers);
export const selectNewsletterSchema = createSelectSchema(newsletter_subscribers);

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = z.infer<typeof selectContactSchema>;
export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type Newsletter = z.infer<typeof selectNewsletterSchema>;
