import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import axios from "axios";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for waitlist submissions
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validationResult = insertWaitlistSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        return res.status(400).json({
          message: "Invalid submission data",
          errors: validationResult.error.errors,
        });
      }

      const { firstName, lastName, email, motorcycle, consent } = validationResult.data;

      // Store the waitlist entry in our storage
      const waitlistEntry = await storage.createWaitlistEntry({
        firstName,
        lastName,
        email,
        motorcycle,
        consent
      });

      // If a Google Forms API integration is needed, you would implement it here
      // This is a simplified example and would need to be configured with actual form details
      try {
        // This is a placeholder for Google Forms API integration
        // In a real implementation, you would use the actual Form ID and field IDs
        
        // const googleFormsResponse = await axios.post(
        //   `https://docs.google.com/forms/d/e/{YOUR_FORM_ID}/formResponse`,
        //   {
        //     'entry.123456789': firstName,
        //     'entry.987654321': lastName,
        //     'entry.456789123': email,
        //     'entry.321654987': motorcycle,
        //   },
        //   {
        //     headers: {
        //       'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //   }
        // );
        
        // For now, we'll just log success and return the created entry
        console.log("Waitlist entry created:", waitlistEntry);
        
        return res.status(201).json({
          message: "Successfully added to waitlist",
          entry: waitlistEntry,
        });
      } catch (error) {
        console.error("Error submitting to external form:", error);
        
        // Even if the external form submission fails, we've stored the entry locally
        return res.status(201).json({
          message: "Successfully added to waitlist (local only)",
          entry: waitlistEntry,
        });
      }
    } catch (error) {
      console.error("Error processing waitlist submission:", error);
      return res.status(500).json({
        message: "An error occurred while processing your submission",
      });
    }
  });

  // Get waitlist entries (for admin purposes)
  app.get("/api/waitlist", async (req: Request, res: Response) => {
    try {
      const entries = await storage.getWaitlistEntries();
      return res.status(200).json(entries);
    } catch (error) {
      console.error("Error fetching waitlist entries:", error);
      return res.status(500).json({
        message: "An error occurred while fetching waitlist entries",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
