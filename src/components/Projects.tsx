import './Projects.css';
import project1 from '../assets/Project1.png';
import project2 from '../assets/Project2.png';

function Projects() {
    const projects = [
        {
            title: 'Student Exam Fee Management System',
            image: project1,
            description:
                'MERN-based final year project with student login, admin dashboard, QR payment, receipt generation, analytics, notifications, and export reports.',
            tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
            github: 'https://github.com/yourusername/student-fee-management',
            demo: 'https://your-demo-link.com',
        },
        {
            title: 'Buildathon Event Website',
            image: project2,
            description:
                'Responsive college event website with QR registration integration, event schedule, announcements, and a modern mobile-friendly UI.',
            tech: ['React', 'CSS', 'JavaScript'],
            github: 'https://github.com/yourusername/buildathon-website',
            demo: 'https://your-demo-link.com',
        },

    ];

    return (<section id="projects" className="projects"> <div className="projects-header"> <p className="section-tag">MY WORK</p> <h2>Featured Projects</h2> </div>

        <div className="projects-grid">
            {projects.map((project) => (
                <div className="project-card" key={project.title}>
                    <img src={project.image} alt={project.title} />

                    <div className="project-content">
                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                        <div className="tech-stack">
                            {project.tech.map((item) => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>

                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noreferrer">
                                GitHub
                            </a>

                            <a href={project.demo} target="_blank" rel="noreferrer">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>


    );
}

export default Projects;
