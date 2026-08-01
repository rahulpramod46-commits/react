import './Contact.css';

function Contact() {
    return (<section id="contact" className="contact"> <div className="contact-header"> <p className="section-tag">GET IN TOUCH</p> <h2>Let's Work Together</h2> <p>
        I'm currently open to internships, freelance opportunities, and
        collaboration on exciting web development projects. </p> </div>


        <div className="contact-grid">
            <div className="contact-info">
                <div className="info-card">
                    <h3>Email</h3>
                    <p>rahul@example.com</p>
                </div>

                <div className="info-card">
                    <h3>Phone</h3>
                    <p>+91 98765 43210</p>
                </div>

                <div className="info-card">
                    <h3>Location</h3>
                    <p>Hyderabad, Telangana, India</p>
                </div>

                <div className="social-links">
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>
                    <a href="mailto:rahul@example.com">Email</a>
                </div>
            </div>

            <form className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <input type="text" placeholder="Subject" />
                <textarea rows={6} placeholder="Your Message"></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    </section>


    );
}

export default Contact;
