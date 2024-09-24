require("dotenv").config();
const SendinblueApiV3Sdk = require("sib-api-v3-sdk");
SendinblueAPIKey = process.env.SENDINBLUE_API_KEY;
const auth = require("../Admincreditial");
const jwt = require("jsonwebtoken");



SendinblueApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
  SendinblueAPIKey;
function generateRandomOTP() {
  const min = 1000;
  const max = 9999;
  const randomOTP = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomOTP.toString().padStart(4, "0");
}
const generateAccessToken = (email) => {
  return jwt.sign({ emailId: email }, process.env.ACCESS_KEY);
};
let otp;
const otpVarify = async (req, res, next) => {
  try {
    if (Number(req.body.otp) === Number(otp)) {
      res.cookie('token', generateAccessToken(auth.ADMIN_MANGER.email), {
        httpOnly: true,           // Prevents JavaScript access to the cookie
        sameSite: 'lax',          // Suitable for local development
        maxAge: 1 * 24 * 60 * 60 * 1000 // 7 days
      });
      res.status(200).json({ success: true, message: "Sign-in Successfully" });
    } else {
      res.status(400).json({ success: false, message: "Invalid OTP" });
    }
  } catch (err) {
    console.log(err)
    res.status(400).json({ success: false, message: err });
  }
};

const emailForOtp = async (req, res, next) => {
  try {
    //  er.parmeshwar1998@gmail.com
    otp = generateRandomOTP().trim();


    const subject = "OTP Verification";
    const sender = { email: "itlaundrywala@gmail.com", name: "ITLaundryWala" };
    const toEmail = [{ email: "itlaundrywala@gmail.com" }];
    const htmlContent = `OTP for your account is ${otp}.`;
    new SendinblueApiV3Sdk.TransactionalEmailsApi()
      .sendTransacEmail({
        subject: subject,
        sender: sender,

        to: toEmail,
        htmlContent: htmlContent,
      })

      .then(
        function (data) {
          res
            .status(200)
            .json({ success: true, message: "OTP Sent Successfully" });
        },
        function (error) {
          res.status(400).json(error);
        }
      )
      .then(() => {
        setTimeout(() => {
          otp = "";
        }, 60000);
      });
  } catch (err) {
    res.status(400).json({ success: false, message: err });
  }
};

module.exports = { emailForOtp, otpVarify };
