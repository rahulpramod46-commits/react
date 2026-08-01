import './Skills.css';

function SkillBar({
    name,
    value,
}: {
    name: string;
    value: number;
}) {
    return (<div className="skill-bar"> <div className="skill-title"> <span>{name}</span> <span>{value}%</span> </div>


        <div className="progress">
            <div className="progress-fill" style={{ width: `${value}%` }} />
        </div>
    </div>


    );
}

function Skills() {
    return (<section id="skills" className="skills"> <div className="skills-header"> <p className="section-tag">MY TOOLBOX</p> <h2>Skills & Technologies</h2> </div>

        < div className="skills-grid" >
            <div className="skills-card">
                <h3>Frontend</h3>
                <SkillBar name="React.js" value={90} />
                <SkillBar name="TypeScript" value={80} />
                <SkillBar name="JavaScript" value={88} />
                <SkillBar name="HTML5 & CSS3" value={92} />
            </div>

            <div className="skills-card">
                <h3>Backend</h3>
                <SkillBar name="Node.js" value={85} />
                <SkillBar name="Express.js" value={82} />
                <SkillBar name="MongoDB" value={80} />
                <SkillBar name="REST APIs" value={84} />
            </div>

            <div className="skills-card">
                <h3>Tools</h3>
                <SkillBar name="Git & GitHub" value={88} />
                <SkillBar name="Tailwind CSS" value={86} />
                <SkillBar name="VS Code" value={92} />
                <SkillBar name="Figma" value={70} />
            </div>
        </div >
    </section >


    );
}

export default Skills;
