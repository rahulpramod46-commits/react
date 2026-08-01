import './About.css';

function About() {
    return (<section id="about" className="about"> <div className="about-header"> <p className="section-tag">WHO I AM</p> <h2>About Me</h2> </div>


        <div className="about-grid">
            <div className="about-card">
                <h3>Career Objective</h3>
                <p>
                    I am a passionate Computer Science Engineering student at
                    <strong> DRK Institute of Science & Technology</strong> with a
                    strong interest in full-stack web development. I enjoy building
                    modern, responsive, and scalable applications using React,
                    TypeScript, Node.js, Express, and MongoDB.
                </p>
            </div>

            <div className="about-card">
                <h3>Quick Info</h3>
                <ul className="info-list">
                    <li><span>Name:</span> Rahul Pramod</li>
                    <li><span>Degree:</span> B.Tech – Computer Science Engineering</li>
                    <li><span>College:</span> DRK Institute of Science & Technology</li>
                    <li><span>Location:</span> Hyderabad, India</li>
                    <li><span>Interests:</span> Frontend Developer,HTML,CSS,JavaScript,React.js </li>
                </ul>
            </div>
        </div>
    </section>


    );
}

export default About;
