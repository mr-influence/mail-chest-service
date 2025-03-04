import express, { Request, Response } from "express";
import EmailCatcher from "@services/EmailCatcher";
import { IncomingEmail } from "@interfaces/Email";

const catchEmailRoutes = express.Router();

catchEmailRoutes.post("/catch-email", async (req: Request, res: Response) => {
  try {
    const { recipient, rawEmail } = req.body;

    // Read the raw email from STDIN
    if (!recipient || !rawEmail) {
      res
        .status(400)
        .json({ message: "Missing recipient or raw email content" });
    }

    // Parse the email content
    const emailCatcher = new EmailCatcher(recipient, rawEmail);
    const parsedEmail: IncomingEmail = await emailCatcher.parseEmail();

    res.status(400).json({ message: "Missing recipient or raw email content" });
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
});

export default catchEmailRoutes;
