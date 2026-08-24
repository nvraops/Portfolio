import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  const timesRoman = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const timesBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const timesItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Colors
  const purpleBorder = rgb(0.29, 0.05, 0.44); // #4A0E70
  const crimsonHeader = rgb(0.72, 0.07, 0.13); // #B81221
  const blueLink = rgb(0.12, 0.35, 0.72); // #1E5AB8
  const darkText = rgb(0.1, 0.1, 0.1);
  const grayText = rgb(0.4, 0.4, 0.4);

  const profileImgPath = path.join(__dirname, "../public/profile.jpg");
  let embeddedProfileImg = null;
  if (fs.existsSync(profileImgPath)) {
    try {
      const imgBytes = fs.readFileSync(profileImgPath);
      embeddedProfileImg = await pdfDoc.embedJpg(imgBytes);
    } catch (e) {
      console.warn("Could not embed profile.jpg:", e.message);
    }
  }

  const pageWidth = 595.28; // A4
  const pageHeight = 841.89; // A4

  function createNewPage() {
    const page = pdfDoc.addPage([pageWidth, pageHeight]);

    // Outer double border as in Curriculum Digest
    page.drawRectangle({
      x: 25,
      y: 25,
      width: pageWidth - 50,
      height: pageHeight - 50,
      borderWidth: 2,
      borderColor: purpleBorder,
      color: rgb(1, 1, 1),
    });

    page.drawRectangle({
      x: 29,
      y: 29,
      width: pageWidth - 58,
      height: pageHeight - 58,
      borderWidth: 0.75,
      borderColor: purpleBorder,
    });

    return page;
  }

  function drawSectionTitle(page, title, y) {
    page.drawText(title, {
      x: 60,
      y: y,
      size: 13,
      font: timesBold,
      color: crimsonHeader,
    });
    // underline
    const width = timesBold.widthOfTextAtSize(title, 13);
    page.drawLine({
      start: { x: 60, y: y - 2 },
      end: { x: 60 + width, y: y - 2 },
      thickness: 1,
      color: crimsonHeader,
    });
    return y - 18;
  }

  function drawDivider(page, y) {
    page.drawLine({
      start: { x: 60, y: y },
      end: { x: pageWidth - 60, y: y },
      thickness: 0.6,
      color: rgb(0.65, 0.65, 0.65),
    });
    return y - 18;
  }

  function drawWrappedText(page, text, x, y, maxWidth, font, size, color, lineHeight = 14) {
    const words = text.split(" ");
    let currentLine = "";
    let currentY = y;

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const width = font.widthOfTextAtSize(testLine, size);

      if (width <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) {
          page.drawText(currentLine, { x, y: currentY, size, font, color });
          currentY -= lineHeight;
        }
        currentLine = word;
      }
    }
    if (currentLine) {
      page.drawText(currentLine, { x, y: currentY, size, font, color });
      currentY -= lineHeight;
    }
    return currentY;
  }

  function drawBulletPoint(page, text, x, y, maxWidth, font, size, color, lineHeight = 14) {
    page.drawText("•", { x: x, y: y, size: size + 1, font: timesBold, color });
    return drawWrappedText(page, text, x + 14, y, maxWidth - 14, font, size, color, lineHeight);
  }

  // ==========================================
  // PAGE 1: CURRICULUM DIGEST & INTRO
  // ==========================================
  const page1 = createNewPage();

  // Top Badge
  page1.drawRectangle({
    x: pageWidth / 2 - 95,
    y: pageHeight - 90,
    width: 190,
    height: 28,
    borderWidth: 1.2,
    borderColor: crimsonHeader,
    color: rgb(1, 1, 1),
  });
  page1.drawText("CURRICULUM DIGEST", {
    x: pageWidth / 2 - 80,
    y: pageHeight - 78,
    size: 11,
    font: timesBold,
    color: crimsonHeader,
  });

  // Profile Image
  if (embeddedProfileImg) {
    page1.drawImage(embeddedProfileImg, {
      x: 60,
      y: pageHeight - 275,
      width: 120,
      height: 145,
    });
    // Outer border around image
    page1.drawRectangle({
      x: 58,
      y: pageHeight - 277,
      width: 124,
      height: 149,
      borderWidth: 1,
      borderColor: darkText,
    });
  }

  // Contact Info right side
  let cY = pageHeight - 145;
  const cX = 205;

  page1.drawText("NIKHILL VASUDEVA RAO. P.", {
    x: cX,
    y: cY,
    size: 13.5,
    font: timesBold,
    color: crimsonHeader,
  });
  cY -= 20;

  page1.drawText("Tiruchirappalli, Tamil Nadu, India", {
    x: cX,
    y: cY,
    size: 10,
    font: timesRoman,
    color: darkText,
  });
  cY -= 18;

  page1.drawText("+91 8344222998", {
    x: cX,
    y: cY,
    size: 10,
    font: timesRoman,
    color: darkText,
  });
  cY -= 18;

  page1.drawText("nvraops@gmail.com | nvraopawar@gmail.com", {
    x: cX,
    y: cY,
    size: 9.5,
    font: timesRoman,
    color: blueLink,
  });
  cY -= 18;

  page1.drawText("Portfolio: https://nvraoportfolio.vercel.app", {
    x: cX,
    y: cY,
    size: 9.5,
    font: timesRoman,
    color: blueLink,
  });
  cY -= 18;

  page1.drawText("GitHub: https://github.com/nvraops", {
    x: cX,
    y: cY,
    size: 9.5,
    font: timesRoman,
    color: blueLink,
  });
  cY -= 18;

  page1.drawText("LinkedIn: https://linkedin.com/in/nvraops", {
    x: cX,
    y: cY,
    size: 9.5,
    font: timesRoman,
    color: blueLink,
  });

  // Section 1: Career Objective
  let p1Y = pageHeight - 310;
  p1Y = drawDivider(page1, p1Y);
  p1Y = drawSectionTitle(page1, "CAREER OBJECTIVE:", p1Y);

  p1Y = drawWrappedText(
    page1,
    "Seeking an Internship, On-the-Job Training (OJT), or Entry-Level Software Engineering opportunity to apply my knowledge in Artificial Intelligence, Computer Vision, Agentic AI, and Full Stack Development while continuously enhancing my technical expertise and contributing to innovative technology solutions.",
    60,
    p1Y,
    pageWidth - 120,
    timesRoman,
    10.5,
    darkText,
    16
  );

  p1Y -= 12;
  p1Y = drawDivider(page1, p1Y);
  p1Y = drawSectionTitle(page1, "PROFESSIONAL PROFILE:", p1Y);

  p1Y = drawWrappedText(
    page1,
    "Motivated Computer Science and Engineering undergraduate with practical experience in Artificial Intelligence, Computer Vision, and Full Stack Development through internships, academic projects, hackathons, and technical learning programs. Currently working as an AI Full Stack Developer Intern, contributing to AI-powered web application development using modern frontend and backend technologies. Passionate about building intelligent software solutions while continuously strengthening technical, analytical, and problem-solving skills.",
    60,
    p1Y,
    pageWidth - 120,
    timesRoman,
    10.5,
    darkText,
    16
  );

  // ==========================================
  // PAGE 2: CAREER HIGHLIGHTS & EDUCATION
  // ==========================================
  const page2 = createNewPage();
  let p2Y = pageHeight - 65;

  p2Y = drawSectionTitle(page2, "CAREER HIGHLIGHTS:", p2Y);
  const highlights = [
    "AI Full Stack Developer Intern – Peppy Gold Technologies Pvt. Ltd.",
    "Academic Intern (OJT) – VDart Academy",
    "Developer of VisionAssist AI, an AI-powered accessibility platform.",
    "Final Round Shortlisted – Gemini Student Ambassador Program 2026",
    "Final Round Shortlisted – Protothon 2026",
    "Participant – Meta PyTorch OpenEnv Hackathon",
    "Completed multiple industry-recognized certifications in Artificial Intelligence, Python Programming, and Full Stack Development.",
  ];

  for (const hl of highlights) {
    p2Y = drawBulletPoint(page2, hl, 65, p2Y, pageWidth - 130, timesRoman, 10.5, darkText, 16);
    p2Y -= 4;
  }

  p2Y -= 10;
  p2Y = drawDivider(page2, p2Y);
  p2Y = drawSectionTitle(page2, "EDUCATIONAL QUALIFICATION:", p2Y);

  page2.drawText("Bachelor of Engineering (B.E.) – Computer Science and Engineering:", {
    x: 60,
    y: p2Y,
    size: 11,
    font: timesBold,
    color: crimsonHeader,
  });
  p2Y -= 18;

  page2.drawText("CARE College of Engineering (Autonomous), Tiruchirappalli", {
    x: 60,
    y: p2Y,
    size: 10.5,
    font: timesRoman,
    color: darkText,
  });
  p2Y -= 16;

  page2.drawText("2024 – Present", {
    x: 60,
    y: p2Y,
    size: 10.5,
    font: timesRoman,
    color: darkText,
  });
  p2Y -= 16;

  page2.drawText("Current Year: III Year", {
    x: 60,
    y: p2Y,
    size: 10.5,
    font: timesRoman,
    color: darkText,
  });
  p2Y -= 18;

  page2.drawText("Relevant Coursework", {
    x: 60,
    y: p2Y,
    size: 10.5,
    font: timesBold,
    color: crimsonHeader,
  });
  p2Y -= 16;

  const courses = [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Artificial Intelligence",
    "Software Engineering",
  ];
  for (const c of courses) {
    p2Y = drawBulletPoint(page2, c, 75, p2Y, pageWidth - 140, timesRoman, 10, darkText, 15);
    p2Y -= 2;
  }

  p2Y -= 10;
  p2Y = drawDivider(page2, p2Y);

  page2.drawText("Higher Secondary Education:", {
    x: 60,
    y: p2Y,
    size: 11,
    font: timesBold,
    color: crimsonHeader,
  });
  p2Y -= 18;

  page2.drawText("SRV Senior Secondary Public School", {
    x: 60,
    y: p2Y,
    size: 10.5,
    font: timesRoman,
    color: darkText,
  });
  p2Y -= 16;

  page2.drawText("Tiruchirappalli, Tamil Nadu", {
    x: 60,
    y: p2Y,
    size: 10.5,
    font: timesRoman,
    color: darkText,
  });
  p2Y -= 16;

  p2Y = drawWrappedText(
    page2,
    "Completed Higher Secondary Education with specialization in Mathematics and Computer Science.",
    60,
    p2Y,
    pageWidth - 120,
    timesRoman,
    10.5,
    darkText,
    15
  );

  // ==========================================
  // PAGE 3: PROFESSIONAL EXPERIENCE
  // ==========================================
  const page3 = createNewPage();
  let p3Y = pageHeight - 65;

  p3Y = drawSectionTitle(page3, "PROFESSIONAL EXPERIENCE:", p3Y);

  page3.drawText("AI Full Stack Developer Intern", {
    x: 60,
    y: p3Y,
    size: 11.5,
    font: timesBold,
    color: blueLink,
  });
  p3Y -= 16;

  page3.drawText("Peppy Gold Technologies Pvt. Ltd.", {
    x: 60,
    y: p3Y,
    size: 11,
    font: timesRoman,
    color: darkText,
  });
  p3Y -= 16;

  page3.drawText("December 2025 – Present", {
    x: 60,
    y: p3Y,
    size: 10.5,
    font: timesRoman,
    color: grayText,
  });
  p3Y -= 18;

  page3.drawText("Roles & Responsibilities:", {
    x: 60,
    y: p3Y,
    size: 10.5,
    font: timesBold,
    color: crimsonHeader,
  });
  p3Y -= 16;

  const peppyPoints = [
    "Developed AI-powered web applications using Python, React, TypeScript, and FastAPI.",
    "Integrated frontend and backend components to deliver scalable software solutions.",
    "Created AI-generated promotional and educational videos for the company using AI-powered content generation tools.",
    "Assisted in debugging, testing, deployment, and performance optimization of web applications.",
    "Collaborated with the development team throughout the software development lifecycle.",
  ];

  for (const pt of peppyPoints) {
    p3Y = drawBulletPoint(page3, pt, 65, p3Y, pageWidth - 130, timesRoman, 10, darkText, 15);
    p3Y -= 3;
  }

  p3Y -= 12;
  p3Y = drawDivider(page3, p3Y);

  page3.drawText("Academic Intern (On-the-Job Training):", {
    x: 60,
    y: p3Y,
    size: 11.5,
    font: timesBold,
    color: blueLink,
  });
  p3Y -= 16;

  page3.drawText("VDart Academy", {
    x: 60,
    y: p3Y,
    size: 11,
    font: timesRoman,
    color: darkText,
  });
  p3Y -= 16;

  page3.drawText("June 2025 – July 2025", {
    x: 60,
    y: p3Y,
    size: 10.5,
    font: timesRoman,
    color: grayText,
  });
  p3Y -= 18;

  page3.drawText("Roles & Responsibilities:", {
    x: 60,
    y: p3Y,
    size: 10.5,
    font: timesBold,
    color: crimsonHeader,
  });
  p3Y -= 16;

  const vdartPoints = [
    "Worked on software development assignments.",
    "Improved programming and debugging skills.",
    "Gained practical exposure to the Software Development Life Cycle (SDLC).",
    "Strengthened teamwork, communication, and analytical thinking.",
  ];

  for (const pt of vdartPoints) {
    p3Y = drawBulletPoint(page3, pt, 65, p3Y, pageWidth - 130, timesRoman, 10, darkText, 15);
    p3Y -= 3;
  }

  // ==========================================
  // PAGE 4: TECHNICAL SKILLS & CORE COMPETENCIES
  // ==========================================
  const page4 = createNewPage();
  let p4Y = pageHeight - 65;

  p4Y = drawSectionTitle(page4, "TECHNICAL SKILLS:", p4Y);

  const skillsData = [
    { title: "Programming Languages:", items: "Python • Java • C++ • SQL" },
    { title: "Frontend Technologies:", items: "HTML • CSS • JavaScript • React • TypeScript" },
    { title: "Backend Technologies:", items: "FastAPI" },
    { title: "Artificial Intelligence:", items: "YOLOv8 • OpenCV • EasyOCR" },
    { title: "Database:", items: "SQLite • MySQL" },
    { title: "Development Tools:", items: "Git • GitHub • Visual Studio Code • Antigravity" },
  ];

  for (const s of skillsData) {
    page4.drawText(s.title, {
      x: 80,
      y: p4Y,
      size: 11,
      font: timesBold,
      color: crimsonHeader,
    });
    p4Y -= 16;
    page4.drawText(s.items, {
      x: 100,
      y: p4Y,
      size: 10.5,
      font: timesRoman,
      color: blueLink,
    });
    p4Y -= 22;
  }

  p4Y -= 10;
  p4Y = drawDivider(page4, p4Y);
  p4Y = drawSectionTitle(page4, "CORE COMPETENCIES:", p4Y);

  const coreComps = [
    "Artificial Intelligence",
    "Full Stack Development",
    "Computer Vision",
    "Software Development",
    "Problem Solving",
  ];

  for (const cc of coreComps) {
    p4Y = drawBulletPoint(page4, cc, 65, p4Y, pageWidth - 130, timesRoman, 10.5, darkText, 16);
    p4Y -= 4;
  }

  // ==========================================
  // PAGE 5: PROJECTS
  // ==========================================
  const page5 = createNewPage();
  let p5Y = pageHeight - 65;

  p5Y = drawSectionTitle(page5, "PROJECTS:", p5Y);

  page5.drawText("VisionAssist AI", {
    x: 60,
    y: p5Y,
    size: 12,
    font: timesBold,
    color: blueLink,
  });
  p5Y -= 16;

  page5.drawText("AI-Powered Accessibility Platform", {
    x: 60,
    y: p5Y,
    size: 10.5,
    font: timesItalic,
    color: blueLink,
  });
  p5Y -= 16;

  p5Y = drawWrappedText(
    page5,
    "VisionAssist AI is an intelligent accessibility platform developed to assist visually impaired individuals through Artificial Intelligence and Computer Vision technologies.",
    60,
    p5Y,
    pageWidth - 120,
    timesRoman,
    10,
    darkText,
    15
  );
  p5Y -= 8;

  page5.drawText("Key Features:", {
    x: 60,
    y: p5Y,
    size: 10.5,
    font: timesBold,
    color: crimsonHeader,
  });
  p5Y -= 16;

  const vaFeatures = [
    "Real-Time Object Detection",
    "Optical Character Recognition (OCR)",
    "Gesture Recognition",
    "Voice Assistance",
    "Environmental Awareness",
  ];

  for (const f of vaFeatures) {
    p5Y = drawBulletPoint(page5, f, 75, p5Y, pageWidth - 140, timesRoman, 10, darkText, 14);
    p5Y -= 2;
  }
  p5Y -= 6;

  page5.drawText("Technology Stack:", {
    x: 60,
    y: p5Y,
    size: 10.5,
    font: timesBold,
    color: crimsonHeader,
  });
  p5Y -= 16;

  page5.drawText("Python • FastAPI • React • TypeScript • YOLOv8 • OpenCV • EasyOCR • SQLite", {
    x: 60,
    y: p5Y,
    size: 9.5,
    font: timesRoman,
    color: blueLink,
  });
  p5Y -= 20;

  p5Y = drawDivider(page5, p5Y);

  page5.drawText("Professional Portfolio Website:", {
    x: 60,
    y: p5Y,
    size: 12,
    font: timesBold,
    color: crimsonHeader,
  });
  p5Y -= 18;

  p5Y = drawWrappedText(
    page5,
    "Designed and developed a modern, responsive portfolio website to showcase professional experience, projects, certifications, technical skills, and achievements.",
    60,
    p5Y,
    pageWidth - 120,
    timesRoman,
    10,
    darkText,
    15
  );
  p5Y -= 10;

  page5.drawText("Portfolio: https://nvraoportfolio.vercel.app", {
    x: 60,
    y: p5Y,
    size: 10,
    font: timesRoman,
    color: blueLink,
  });
  p5Y -= 18;

  page5.drawText("Technology Stack:", {
    x: 60,
    y: p5Y,
    size: 10.5,
    font: timesBold,
    color: crimsonHeader,
  });
  p5Y -= 16;

  page5.drawText("React • HTML • CSS • JavaScript • Vite", {
    x: 60,
    y: p5Y,
    size: 10,
    font: timesRoman,
    color: blueLink,
  });

  // ==========================================
  // PAGE 6: CERTIFICATIONS & HACKATHONS
  // ==========================================
  const page6 = createNewPage();
  let p6Y = pageHeight - 65;

  p6Y = drawSectionTitle(page6, "CERTIFICATIONS:", p6Y);

  const certData = [
    { org: "Microsoft Learn:", items: ["Introduction to AI Concepts"] },
    { org: "Udemy:", items: ["Complete Absolute Python Course"] },
    { org: "Simplilearn SkillUp:", items: ["Full Stack Developer", "Free Full Stack Developer Course"] },
    { org: "AICTE – Ministry of Education Innovation Cell:", items: ["Innovation Ambassador (Foundation Level)"] },
    { org: "Pantech eLearning:", items: ["Full Stack Development Workshop"] },
    { org: "Government of India:", items: ["Intellectual Property Rights (IPR) Awareness Program"] },
  ];

  for (const c of certData) {
    page6.drawText(c.org, {
      x: 75,
      y: p6Y,
      size: 10.5,
      font: timesBold,
      color: crimsonHeader,
    });
    p6Y -= 15;
    for (const item of c.items) {
      p6Y = drawBulletPoint(page6, item, 90, p6Y, pageWidth - 150, timesRoman, 10, blueLink, 14);
      p6Y -= 2;
    }
    p6Y -= 4;
  }

  p6Y -= 8;
  p6Y = drawDivider(page6, p6Y);
  p6Y = drawSectionTitle(page6, "HACKATHONS, EVENTS & PROFESSIONAL DEVELOPMENT:", p6Y);

  const hackEvents = [
    "Gemini Student Ambassador Program 2026 - Successfully shortlisted for the Final Round, demonstrating leadership potential, communication skills, and technical enthusiasm.",
    "Protothon 2026 - Team HACKERS shortlisted for the Final Round by presenting an innovative software solution in a national-level technical competition.",
    "Meta PyTorch OpenEnv Hackathon - Participated in the hackathon to gain practical exposure to AI development, PyTorch, and collaborative software engineering.",
    "Hugging Face AI Agent Building Event - Participated in technical sessions on AI Agents, Large Language Models (LLMs), Prompt Engineering, and AI application development.",
  ];

  for (const ev of hackEvents) {
    p6Y = drawBulletPoint(page6, ev, 65, p6Y, pageWidth - 130, timesRoman, 9.5, darkText, 14);
    p6Y -= 4;
  }

  // ==========================================
  // PAGE 7: ACHIEVEMENTS & INTERESTS
  // ==========================================
  const page7 = createNewPage();
  let p7Y = pageHeight - 65;

  const moreWebinars = [
    "Career Guidance Webinar – Skill Dunia Edutech - Participated in a professional webinar focused on career planning, skill development, and employability in the technology industry.",
    "The Ultimate Student Roadmap & Launchpad to Data Science, AI & Machine Learning - Participated in the GUVI × HCL webinar covering Artificial Intelligence, Machine Learning, Data Science, and emerging technology career opportunities.",
  ];

  for (const ev of moreWebinars) {
    p7Y = drawBulletPoint(page7, ev, 65, p7Y, pageWidth - 130, timesRoman, 9.5, darkText, 14);
    p7Y -= 4;
  }

  p7Y -= 10;
  p7Y = drawDivider(page7, p7Y);
  p7Y = drawSectionTitle(page7, "ACHIEVEMENTS:", p7Y);

  const achievementsList = [
    "AI Full Stack Developer Intern at Peppy Gold Technologies Pvt. Ltd.",
    "Successfully completed Academic Internship at VDart Academy.",
    "Final Round Shortlisted – Gemini Student Ambassador Program 2026.",
    "Final Round Shortlisted – Protothon 2026.",
    "Participant – Meta PyTorch OpenEnv Hackathon.",
    "Completed multiple professional certifications in Artificial Intelligence, Python Programming, and Full Stack Development.",
  ];

  for (const ach of achievementsList) {
    p7Y = drawBulletPoint(page7, ach, 65, p7Y, pageWidth - 130, timesRoman, 10, darkText, 15);
    p7Y -= 3;
  }

  p7Y -= 10;
  p7Y = drawDivider(page7, p7Y);
  p7Y = drawSectionTitle(page7, "AREAS OF INTEREST:", p7Y);

  const interestsList = [
    "Artificial Intelligence",
    "Full Stack Development",
    "Computer Vision",
    "Machine Learning",
  ];

  for (const it of interestsList) {
    p7Y = drawBulletPoint(page7, it, 65, p7Y, pageWidth - 130, timesRoman, 10, blueLink, 15);
    p7Y -= 2;
  }

  p7Y -= 10;
  p7Y = drawDivider(page7, p7Y);
  p7Y = drawSectionTitle(page7, "LANGUAGES KNOWN:", p7Y);

  const languagesList = ["English", "Tamil", "Hindi", "Marathi"];
  for (const l of languagesList) {
    p7Y = drawBulletPoint(page7, l, 65, p7Y, pageWidth - 130, timesRoman, 10, darkText, 15);
    p7Y -= 2;
  }

  // ==========================================
  // PAGE 8: PERSONAL DETAILS & DECLARATION
  // ==========================================
  const page8 = createNewPage();
  let p8Y = pageHeight - 65;

  p8Y = drawSectionTitle(page8, "PERSONAL DETAILS:", p8Y);

  const personalDetails = [
    { label: "Full Name:", value: "Nikhill Vasudeva Rao. P." },
    { label: "Date of Birth:", value: "25 July 2007" },
    { label: "Nationality:", value: "Indian" },
    { label: "Gender:", value: "Male" },
    { label: "Current Designation:", value: "AI Full Stack Developer Intern" },
    { label: "Location:", value: "Tiruchirappalli, Tamil Nadu, India" },
  ];

  for (const pd of personalDetails) {
    page8.drawText(pd.label, {
      x: 60,
      y: p8Y,
      size: 11,
      font: timesBold,
      color: crimsonHeader,
    });
    page8.drawText(pd.value, {
      x: 210,
      y: p8Y,
      size: 11,
      font: timesRoman,
      color: blueLink,
    });
    p8Y -= 24;
  }

  p8Y -= 40;
  p8Y = drawDivider(page8, p8Y);
  p8Y = drawSectionTitle(page8, "DECLARATION:", p8Y);

  p8Y = drawWrappedText(
    page8,
    "I hereby declare that the information provided above is true and correct to the best of my knowledge and belief.",
    60,
    p8Y,
    pageWidth - 120,
    timesRoman,
    10.5,
    darkText,
    16
  );

  p8Y -= 50;
  page8.drawText("Place: Tiruchirappalli", {
    x: 60,
    y: p8Y,
    size: 11,
    font: timesBold,
    color: crimsonHeader,
  });

  p8Y -= 35;
  page8.drawText("Date: ______________________", {
    x: 60,
    y: p8Y,
    size: 11,
    font: timesBold,
    color: crimsonHeader,
  });

  page8.drawText("(Nikhill Vasudeva Rao P)", {
    x: pageWidth - 230,
    y: p8Y,
    size: 11,
    font: timesBold,
    color: blueLink,
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(__dirname, "../public/CV_Nikhill_Vasudeva_Rao.pdf");
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`✅ Resume PDF successfully written to ${outputPath} (${pdfBytes.length} bytes)`);
}

generateResume().catch(console.error);
