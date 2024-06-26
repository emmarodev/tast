const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");

// Function to send emails
const sendEmail = async (to, subject, templateFile, data) => {
  try {
    console.log("runn", to);
    //start of nodemailer email verification
       //start of nodemailer
       var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "emmaroeneyoh@gmail.com",
  
          pass: 'jcgorckqvxpwcaut',
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

    // Load the email template using ejs
    const templatePath = path.join(__dirname, "views", templateFile); // Path to your template file
    const emailTemplate = await ejs.renderFile(`./views/${templateFile}`, {
      data,
    });

    // Define email options
    const mailOptions = {
      from: "emmaroeneyoh@gmail.com",
      to: to,
      subject: subject,
      html: emailTemplate,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return true; // Return true if email is sent successfully
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // Return false if there's an error sending the email
  }
};



module.exports = {
  sendEmail,
};
