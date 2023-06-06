import React, {useEffect} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';
import ScrollReveal from 'scrollreveal';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mvonjpoa");
    useEffect(() => {
        ScrollReveal().reveal('.animated-top', {
            delay: 300,
            distance: '50px',
            origin: 'top',
            duration: 1200,
            easing: 'ease-out',
        });

    }, []);

    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
            <div className="form-container animated-top">
                <h2>Contact Me</h2>
                <form action="https://formspree.io/f/mvonjpoa" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" type="text" name="name" />
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" name="email" />
                    <ValidationError prefix="Email" field="email" errors={state.errors}  />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message"  />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                    <button className="submit-button" type="submit" disabled={state.submitting}>
                        <span>
                            Submit
                        </span>
                    </button>
                </form>
            </div>
    );
};

export default ContactForm;
