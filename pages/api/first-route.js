import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message, surname, business } = req.body;

    // Configurazione del trasportatore SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_JET_HOST, // Sostituisci con il tuo host SMTP
      port: 587, // Porta standard per SMTP non sicuro, usa 465 per SSL
      secure: false, // true per 465, false per altre porte
      auth: {
        user: process.env.MAIL_JET_USER, // La tua email
        pass: process.env.MAIL_JET_PASS, // La tua password
      },
    });

    // Opzioni dell'email
    const mailOptions = {
      from: '"Form Job Opportunity" lorenzo.regalzi@gmail.com', // Mittente
      to: "lorenzo.regalzi@gmail.com", // Destinatario o destinatari
      subject: `Nuova Job Opportunity da ${name} ${surname}`, // Oggetto dell'email
      text: `${message} | Sent from: ${email} | Azienda: ${business}`, // Corpo dell'email in formato testo
      html: `<b>Message:</b> ${message} <br><b>Sent from:</b> ${email}`, // Corpo dell'email in formato HTML
    };

    // Invio dell'email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
      }
      res.status(200).json({ success: true, message: "Email inviata con successo!" });
    });
  } else {
    // Gestisce il caso in cui il metodo della richiesta non sia POST
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

// export default function handler(req, res) {
//   res.status(200).json({ message: "My first API route" });
// }