const nodemailer = require('nodemailer');

const sendEmail =  async (options) => {
    const transporter = nodemailer.createTransport({
        host: 'sandbox.smtp.mailtrap.io',
        secure: false,
        port:2525,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASS
        },
        tls: {
            rejectUnauthorized: false
          }
    })

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: options.to,
        subject: options.subject,
        html: options.text
    }

     // transporter.sendMail(mailOptions, function (err, info) {
    //     if(err) {
    //         console.log(err)
    //     }else {
    //         console.log(info)
    //     }
    // });
    await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error(err,"mail error");
                reject(err);
            } else {
                resolve(info,"maikl info");
            }
        });
    });
};


module.exports = sendEmail;