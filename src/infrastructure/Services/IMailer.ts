export interface IMailer {
    send (toMail: string, toName: string, subject: string, body: string): Promise<void>;
}