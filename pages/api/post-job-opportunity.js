import { IncomingForm } from 'formidable';
import nodemailer from 'nodemailer';
import fs from 'fs';
import util from 'util';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (req.method === 'POST') {
    const form = new IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      const attachments = [];

      if (files.file) {
        const readFileAsync = util.promisify(fs.readFile);
        try {
          // Assicurati che il percorso e il nome del file siano corretti
          const filePath = files.file[0].filepath;
          const fileBuffer = await readFileAsync(filePath);

          attachments.push({
            filename: files.file[0].originalFilename,
            content: fileBuffer,
          });
        } catch (readFileError) {
          console.error("Errore nella lettura del file:", readFileError);
          return res.status(500).json({ error: readFileError.message });
        }
      }

      // Configura nodemailer e invia l'email con l'allegato
      const transporter = nodemailer.createTransport({
        host: "in-v3.mailjet.com",
        port: 587,
        secure: false,
        auth: {
          user: '1e652161e9b36ce4ae59e4beec124c9e',
          pass: 'b918121525133649fc310cd5a455f809',
        },
      });

      const { name, email, message, surname, business } = fields;

      const mailOptions = {
        from: '"Form Job Opportunity" lorenzo.regalzi@gmail.com',
        to: "lorenzo.regalzi@gmail.com",
        subject: `Nuova Job Opportunity da ${name} ${surname}`,
        text: `${message} | Sent from: ${email} | Azienda: ${business}`,
        html: `<b>Message:</b> ${message} <br><b>Sent from:</b> ${email}`,
        attachments: attachments,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ error: error.message });
        }
        res.status(200).json({ success: true, message: "Email inviata con successo!" });
      });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
