import type { Express } from "express";
import { z } from "zod";
import { db } from "db";
import { contacts, newsletter_subscribers } from "@db/schema";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
});

const newsletterSchema = z.object({
  email: z.string().email(),
});

// Email configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Verify email configuration on startup
transporter.verify()
  .then(() => console.log("SMTP connection verified"))
  .catch((error) => console.error("SMTP connection error:", error));

export function registerRoutes(app: Express) {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);
      
      // Store in database
      await db.insert(contacts).values(data);
      
      // Send email notification with HTML formatting and retry logic
      const maxRetries = 3;
      let retryCount = 0;
      
      while (retryCount < maxRetries) {
        try {
          await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Use same email for sending and receiving
            subject: "New Contact Form Submission - Smart Clinic Systems",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #4CAF50;">New Contact Form Submission</h2>
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-line;">${data.message}</p>
              </div>
              <p style="color: #666; font-size: 12px; margin-top: 20px;">
                Received on ${new Date().toLocaleString()}
              </p>
            </div>
          `,
          text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Message: ${data.message}

Received on ${new Date().toLocaleString()}
          `,
        });
      break; // Exit retry loop on success
        } catch (emailError) {
          console.error(`Failed to send email (attempt ${retryCount + 1}/${maxRetries}):`, emailError);
          retryCount++;
          
          if (retryCount === maxRetries) {
            console.error("Max retry attempts reached for email sending");
            // Still return success to user if DB save worked
            // but log the email error for monitoring
          } else {
            // Wait before retrying (exponential backoff)
            await new Promise(resolve => setTimeout(resolve, Math.pow(2, retryCount) * 1000));
          }
        }
      }
      
      res.json({ success: true });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ error: "Failed to process contact form" });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const { email } = newsletterSchema.parse(req.body);
      
      // Store in database
      await db.insert(newsletter_subscribers).values({ email });
      
      res.json({ success: true });
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      res.status(400).json({ error: "Failed to subscribe to newsletter" });
    }
  });
}
