import './Hero.css';
import profile from '../assets/Profile.png';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Document, Packer, Paragraph, HeadingLevel, TextRun } from "docx";
// @ts-ignore
import { saveAs } from "file-saver";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
    const downloadResume = async () => {
        const doc = new Document({
            sections: [
                {
                    children: [
                        new Paragraph({
                            text: "L.Rahul Pramod",
                            heading: HeadingLevel.TITLE,
                        }),

                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Computer Science Engineering Student | MERN Stack Developer",
                                    bold: true,
                                }),
                            ],
                        }),

                        new Paragraph("Email: rahul@example.com"),
                        new Paragraph("Phone: +91 98765 43210"),
                        new Paragraph("Location: Hyderabad, Telangana, India"),

                        new Paragraph({
                            text: "Career Objective",
                            heading: HeadingLevel.HEADING_1,
                        }),

                        new Paragraph(
                            "Passionate Computer Science Engineering student with strong knowledge of React, TypeScript, Node.js, Express, and MongoDB. Interested in building scalable web applications and contributing to innovative software development teams."
                        ),

                        new Paragraph({
                            text: "Education",
                            heading: HeadingLevel.HEADING_1,
                        }),

                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "B.Tech in Computer Science Engineering (2022-2026)",
                                    bold: true,
                                }),
                            ],
                        }),

                        new Paragraph("DRK Institute of Science & Technology"),

                        new Paragraph({
                            text: "Technical Skills",
                            heading: HeadingLevel.HEADING_1,
                        }),

                        new Paragraph(
                            "Frontend: React.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS"
                        ),
                        new Paragraph(
                            "Backend: Node.js, Express.js, MongoDB"
                        ),
                        new Paragraph(
                            "Tools: Git, GitHub, VS Code"
                        ),

                        new Paragraph({
                            text: "Projects",
                            heading: HeadingLevel.HEADING_1,
                        }),

                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Student Exam Fee Management System",
                                    bold: true,
                                }),
                            ],
                        }),

                        new Paragraph(
                            "MERN-based application with student login, admin dashboard, QR payment, receipt generation, analytics, notifications, and export reports."
                        ),

                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Buildathon Event Website",
                                    bold: true,
                                }),
                            ],
                        }),

                        new Paragraph(
                            "Responsive event website with QR registration integration and mobile-friendly design."
                        ),

                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Resume Builder",
                                    bold: true,
                                }),
                            ],
                        }),

                        new Paragraph(
                            "Web application for creating professional resumes with live preview and PDF export support."
                        ),

                        new Paragraph({
                            text: "Buildathon Achievement",
                            heading: HeadingLevel.HEADING_1,
                        }),

                        new Paragraph(
                            "Participated in Buildathon 2026 and developed a working web application prototype."
                        ),

                        new Paragraph({
                            text: "Certifications",
                            heading: HeadingLevel.HEADING_1,
                        }),

                        new Paragraph("React Development Certificate"),
                        new Paragraph("Web Development Certificate"),
                        new Paragraph("Buildathon Participation Certificate"),

                        new Paragraph({
                            text: "Declaration",
                            heading: HeadingLevel.HEADING_1,
                        }),

                        new Paragraph(
                            "I hereby declare that the above information is true to the best of my knowledge and belief."
                        ),

                        new Paragraph(""),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "L.Rahul Pramod",
                                    bold: true,
                                }),
                            ],
                        }),
                    ],
                },
            ],
        });

        const blob = await Packer.toBlob(doc);
        saveAs(blob, "Resume.docx");
    };

    const downloadPortfolio = async () => {
        const element = document.body; // download the whole portfolio page

        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#0b1120',
        });

        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        let heightLeft = pdfHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
        heightLeft -= pdf.internal.pageSize.getHeight();

        while (heightLeft > 0) {
            position = heightLeft - pdfHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfHeight);
            heightLeft -= pdf.internal.pageSize.getHeight();
        }

        pdf.save('Portfolio.pdf');
    };


    return (<section className="hero"> <div className="hero-left"> <p className="hero-tag">AVAILABLE FOR INTERNSHIPS</p>

        <h1>
            Hi, I'm <span>L.Rahul Pramod</span>
        </h1>

        <h2 className="typing">
            Frontend Developer | React Developer | CSE Student
        </h2>

        <p className="hero-text">
            I build modern web applications, dashboards, and full-stack projects
            using React, TypeScript, Node.js, Express, and MongoDB.
        </p>

        <div className="hero-buttons">
            <a href="#projects" className="btn primary">
                View Projects
            </a>

            <a href="/Resume.docx" className="btn primary" onClick={downloadResume}>
                Download Resume
            </a>

            <button className="btn primary" onClick={downloadPortfolio}>
                Download Portfolio
            </button>
        </div>

        <div className="hero-social">
            <a href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
            >
                <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/l-rahul-pramod-934137425?utm_source=share_via&utm_content=profile&utm_medium=member_android/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
            >
                <FaLinkedin />
            </a>

            <a href="mailto:rahulpramod46@gmail.com"
                aria-label="Email"
            >
                <FaEnvelope />
            </a>
        </div>
    </div>

        <div className="hero-right">
            <div className="profile-ring">
                <img src={profile} alt="Rahul Pramod" />
            </div>
        </div>

    </section>



    );
}

export default Hero;
