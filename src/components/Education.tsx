import './Education.css';

function Education() {
    return (<section id="education" className="education"> <div className="education-header"> <p className="section-tag">ACADEMIC JOURNEY</p> <h2>Education</h2> </div>


        <div className="timeline">
            <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div className="timeline-content">
                    <span className="timeline-year">2024 – 2028</span>

                    <h3>B.Tech in Computer Science Engineering</h3>

                    <h4>DRK Institute of Science & Technology</h4>

                    <p>
                        Studying core computer science subjects including Data Structures,
                        Algorithms, Operating Systems, DBMS, Computer Networks, and
                        Full-Stack Web Development.
                    </p>
                </div>
            </div>

            <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div className="timeline-content">
                    <span className="timeline-year">Intermediate</span>

                    <h3>MPC (Mathematics, Physics, Chemistry)</h3>

                    <h4>NRI Junior College</h4>

                    <p>
                        Built a strong foundation in mathematics, logical reasoning, and
                        analytical problem solving.
                    </p>
                </div>
            </div>

            <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div className="timeline-content">
                    <span className="timeline-year">SSC</span>

                    <h3>Secondary School Education</h3>

                    <h4>VASARA VIDYALAYA HIGH SCHOOL</h4>

                    <p>
                        Completed school education with focus on science, mathematics, and
                        communication skills.
                    </p>
                </div>
            </div>
        </div>
    </section>


    );
}

export default Education;
