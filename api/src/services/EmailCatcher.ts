import { simpleParser } from "mailparser";
import { IncomingEmail } from "@interfaces/Email";

/*
 * The following request will receive these 2 params:
 * "recipient": Is the address where the email will was sent
 * "rawEmail": Is the email content in STDIN format
 * The function should parse the email and save it in a database
 */
class EmailCatcher {
  recipient: string;
  rawEmail: string;

  constructor(recipient: string, rawEmail: string) {
    this.recipient = recipient;
    this.rawEmail = rawEmail;
  }

  getMailAlias = () => {
    return this.recipient.split("@")[0];
  };

  extractMailAlias = (mailAddress: string) => {
    return mailAddress.split("@")[0];
  };

  async parseEmail(): Promise<IncomingEmail> {
    const parsedEmail = await simpleParser(this.rawEmail);

    const mailData: IncomingEmail = {
      to: this.getMailAlias() || this.extractMailAlias(this.recipient ?? ""),
      from: (parsedEmail.from
        ? parsedEmail.from.value[0].address
        : "") as string,
      subject: parsedEmail.subject || "",
      text: parsedEmail.text || "",
      html: parsedEmail.html || "",
    };
    return mailData;
  }
}

export default EmailCatcher;
