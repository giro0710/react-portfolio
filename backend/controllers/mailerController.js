const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  }
})

const sendEmail = (req, res) => {
  const { subject, text, email } = req.body
  const emailOptions = {
    from: process.env.MAIL_USERNAME,
    to: process.env.MAIL_USERNAME_RECEIVER,
    subject: `[My Portfolio] ${subject}`,
    text: `${text} \n\n\nSender Email: ${email}`
  }

  if (!subject || !email || !text) {
    res.status(400)
    throw new Error("Please fill all necessarry fields.")
  }

  transporter.sendMail(emailOptions, (error, info) => {
    if (error) {
      res.status(400)
      throw new Error(error)
    } else {
      res.status(200).json({ message: "Email has been sent!" })
    }
  })
}

module.exports = {
  sendEmail
}