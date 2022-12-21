const nodemailer = require("nodemailer");

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "koleynik82@meta.ua",
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "koleynik82@meta.ua" };
  try {
    await transporter.sendMail(email);
    return true;
  } catch (error) {
    throw error.message;
  }
};

module.exports = sendEmail;
