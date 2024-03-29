const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            secure: false,
            auth: {
                user: 'testingEmail@gmail.com',
                pass: 'generated by gmail app',
            },
        });

        await transporter.sendMail({
            from: 'testingEmail@gmail.com',
            to: email,
            subject: subject,
            text: text,
        });

        return "email sent sucessfully"
    } catch (error) {
        console.log("email not sent");
        return error
    }
};

module.exports = sendEmail;