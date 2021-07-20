import './Contact.css';

function Contact(props) {
    const { forwardedRef, enterCount } = props;
    return (
        <div id="contact" className={"viewport-block view-" + enterCount} ref={forwardedRef}>
            <div className="contents">
                <h1>Questions? Comments? Concerns?</h1>
                <h2>Sure, let's connect.</h2>
                <a className="fab fa-github" target="_blank" rel="noopener noreferrer" href="https://github.com/Expugn"><span>GitHub</span></a>
                <a className="fab fa-linkedin-in" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/calvin-ye-219013107"><span>LinkedIn</span></a>
                <a className="far fa-envelope" target="_blank" rel="noopener noreferrer" href="mailto:cye54049@gmail.com"><span>E-Mail</span></a>
                <div className="center">
                    <p>
                        Feel free to reach out to me on any of the contact methods above.<br></br>
                        I'll try my best to get back to you.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;