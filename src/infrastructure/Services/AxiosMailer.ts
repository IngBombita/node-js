import axios from "axios";
import {injectable} from "inversify";
import {IMailer} from "./IMailer";

@injectable()
export class AxiosMailer implements IMailer{
    public async send (toMail: string, toName: string, subject: string, body: string): Promise<void> {
        await axios.post(process.env.MAIL_HOST || "", {
            "Messages": [
                {
                    "From": {
                        "Email": process.env.MAIL_SENDER,
                        "Name": process.env.MAIL_SENDER_NAME
                    },
                    "To": [
                        {
                            "Email": toMail,
                            "Name": toName
                        }
                    ],
                    "Subject": subject,
                    "HTMLPart": body
                }
            ]
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
            auth: {
                username: process.env.MAIL_API_KEY_USER || '',
                password: process.env.MAIL_API_KEY_PASS || ''
            }
        });
    }
}