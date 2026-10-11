const { google } = require("googleapis");
const MailComposer = require("nodemailer/lib/mail-composer");

const oAuth2Client = new google.auth.OAuth2(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground",
);
oAuth2Client.setCredentials({
  refresh_token: process.env.GMAIL_REFRESH_TOKEN,
});

const sendEmail = async (to, subject, htmlContent) => {
  try {
    const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

    const message = await new MailComposer({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: htmlContent,
    })
      .compile()
      .build();

    await gmail.users.messages.send({
      userId: "me",
      requestBody: { raw: message.toString("base64url") },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Email could not be sent");
  }
};

module.exports = sendEmail;