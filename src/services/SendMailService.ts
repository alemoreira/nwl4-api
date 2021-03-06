import nodemailer, { Transporter } from 'nodemailer';
import {resolve} from 'path';
import fs from 'fs';
import handlebars from 'handlebars';

class SendMailService {
  private client: Transporter;

  // no constructor nao eh possivel usar async/await
  constructor() {
    nodemailer.createTestAccount()
    .then(account => {
      let transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass
        }
      });
      this.client = transporter;
    });
  }

  async execute(to: string, subject: string, body: string) {
    const npsPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs");
    const templateFileContent = fs.readFileSync(npsPath).toString("utf-8");

    const mailTemplateParse = handlebars.compile(templateFileContent);
    const html = mailTemplateParse({
      name: to,
      title: subject,
      description: body
    })

    const message =   await this.client.sendMail({
      to,
      subject,
      // html: body,
      html,
      from: "NPS <noreplay@nps.com.br>"
    });

    console.log("Message sent: %s", message.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
  }

  async sendGmail(to: string, subject: string, body: string) {
    const npsPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs");
      const templateFileContent = fs.readFileSync(npsPath).toString("utf-8");
  
      const mailTemplateParse = handlebars.compile(templateFileContent);
      const html = mailTemplateParse({
        name: to,
        title: subject,
        description: body
      });
  
      const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: "fulanosilva0110@gmail.com",
            pass: "@FulanoSilva0110#"
          },
          tls: {
            rejectUnauthorized: false
          }
      });
  
      const message = await transporter.sendMail({
        to: ["leilamaiac@gmail.com","alebm56@gmail.com"],
        subject,
        // html: body,
        html
        // from: "NPS <noreplay@nps.com.br>"
      });

      console.log(message);
  }
}

// export { SendMailService }
export default new SendMailService();
