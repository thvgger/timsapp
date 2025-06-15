import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const app = express();
const port = 3000;

// Resolve __dirname with ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use((req, res, next) => {
  if (req.path !== "/" && path.extname(req.path) === "") {
    const filePath = path.join(__dirname, "public", req.path + ".html");
    res.sendFile(filePath, (err) => {
      if (err) next(); // Let express.static handle it or 404
    });
  } else {
    next();
  }
});
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/submit-form", async (req, res) => {
  const formData = req.body;

  const agreed = formData.agreeTerms === "yes";
  const dob = `${formData.DD}/${formData.MM}/${formData.YYY}`;

  const output = `
  <p>You have a new registration request:</p>
  <ul>
    <li>Name: ${formData.fullName}</li>
    <li>Email: ${formData.email}</li>
    <li>Phone: ${formData.phone}</li>
    <li>Date of Birth: ${dob}</li>
    <li>Gender: ${formData.gender}</li>
    <li>Nationality: ${formData.nationality}</li>
    <li>studyType: ${formData.studyType}</li>
    <li>intake: ${formData.intake}</li>
    <li>Interested Course: ${formData.interestedCourse}</li>
    <li>Interested University: ${formData.interestedUni}</li>
    <li>Qualification: ${formData.qualification}</li>
    <li>Proficiency: ${formData.englishProficiency}</li>
    <li>Referral: ${formData.referralSource}</li>
    <li>Agreed: ${agreed}</li>
    <!-- add more fields here -->
  </ul>
`;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "damy84511@gmail.com", // replace with your email
      pass: "uwdbmxvlszidtxjw", // use app password if 2FA
    },
  });

  try {
    await transporter.sendMail({
      from: '"Swift Global Ventures" <your_email@gmail.com>',
      to: "elsasnowsnowelsa@gmail.com",
      subject: "New Registration Form Submission",
      html: output,
    });
    res.redirect("/");
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).send("Error sending email");
  }
});
// Example API endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
