import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config();

export async function getContact(req, res) {
    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Message from ${name} - ${email}`,
        text: `${message}\n\nFrom: ${email}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).send();
    } catch (error) {
        console.log('Error Occurs', error);
        res.status(500).send();
    }
}
