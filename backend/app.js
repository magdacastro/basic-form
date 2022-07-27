import express from "express";
import { createTransport } from "nodemailer";
import dotenv from "dotenv";
import cors from 'cors';
dotenv.config();

const app = express();
app.use(cors({
    origin: 'http://127.0.0.1:4200'
}));

app.use(express.json({ strict: false }));

app.get("/", (request, response) => {
  response.json({
    status: true,
  });
});

app.post("/contact", (request, response) => {
  const remetente = createTransport({
    service: process.env.MAIL_DRIVER,
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const subject = [
    `username: ${request.body.user}`,
    `telephone: ${request.body.tel}`,
    `email: ${request.body.email}`,
    `password: ${request.body.password}`,
    `confirmPassword: ${request.body.confirmPassword}`,
  ].join(" | ");

  const emailASerEnviado = {
    from: process.env.MAIL_USERNAME,
    to: process.env.MAIL_TO,
    subject: "Enviando E-mail com NodeJS",
    text: subject,
  };

  remetente.sendMail(emailASerEnviado, function (error) {
    if (error) {
      response.status(400).send(error);
    } else {
      response.status(200).send({});
    }
  });
});

app.listen(process.env.APP_PORT, () =>
  console.log(`Hello world app listening on port ${process.env.APP_PORT}!`)
);
