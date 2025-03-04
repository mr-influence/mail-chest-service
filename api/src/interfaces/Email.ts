export interface IncomingEmail {
  to: string;
  from: string;
  subject?: string;
  text?: string;
  html?: string;
}
