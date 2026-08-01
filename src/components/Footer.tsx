import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (<footer className="footer"> <div className="footer-content"> <h3>L.Rahul Pramod</h3>


        <p>
            Frontend Developer • React Developer • Computer Science Engineering
            Student
        </p>

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
        <p className="copyright">
            © 2026 Rahul Pramod. Built with React & TypeScript.
        </p>

    </div>
    </footer >

    );
}

export default Footer;
