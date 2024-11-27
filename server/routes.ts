import type { Express } from "express";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
});

export function registerRoutes(app: Express) {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);
      
      // Here you would typically send an email or store in database
      // For demo, just logging and returning success
      console.log("Contact form submission:", data);
      
      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ error: "Invalid form data" });
    }
  });
}
