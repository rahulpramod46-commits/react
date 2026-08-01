import './Buildathon.css';
import buildathon from '../assets/buildathon.png';

function Buildathon() {
    return (<section id="buildathon" className="buildathon"> <div className="buildathon-header"> <p className="section-tag">ACHIEVEMENT</p> <h2>Buildathon 2026</h2> </div>


        <div className="buildathon-card">
            <div className="buildathon-image">
                <img src={buildathon} alt="Buildathon Event" />
            </div>

            <div className="buildathon-content">
                <h3>College Buildathon Participant</h3>

                <p>
                    Participated in the college Buildathon event and developed a web
                    application prototype under a limited time schedule. Collaborated
                    with a team to design, build, and present a working solution using
                    modern web technologies.
                </p>

                <div className="achievement-list">
                    <div className="achievement-item">
                        <span>48-Hour Development Challenge</span>
                    </div>
                    <div className="achievement-item">
                        <span>Team Collaboration & Problem Solving</span>
                    </div>
                    <div className="achievement-item">
                        <span>Frontend & Backend Integration</span>
                    </div>
                    <div className="achievement-item">
                        <span>Project Presentation & Demo</span>
                    </div>
                </div>
            </div>
        </div>
    </section>


    );
}

export default Buildathon;
