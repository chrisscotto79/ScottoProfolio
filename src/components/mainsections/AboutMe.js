import React, {useEffect} from "react";
import "./AboutMe.css"
import ScrollReveal from 'scrollreveal';



const About = () => {
    

    useEffect(() => {
        ScrollReveal().reveal('.animated-right', {
            delay: 200,
            distance: '50px',
            origin: 'right',
            duration: 1000,
            easing: 'ease-out',
        });

        ScrollReveal().reveal('.animated-bottom', {
            delay: 200,
            distance: '50px',
            origin: 'bottom',
            duration: 1000,
            easing: 'ease-out',
        });
    }, []);

    return (
        <section className="About-container">
            <h2 className="animated-bottom">
                About Me
            </h2>
            <div className="About-content animated-right">
                
                <div className="About-content-text">
                    <p>
                        Welcome to Christopher Scotto's portfolio, where innovation meets functionality! As a dedicated software engineer and a proud student at Florida Gulf Coast University, I am excited to share my passion for technology and showcase my journey through this platform.                    </p>
                    <p>
                        At FGCU, I have been fortunate to pursue my major in software engineering while being a part of the vibrant fraternity Alpha Tau Omega (ATO). These experiences have shaped me into a well-rounded individual, combining my technical skills with teamwork, leadership, and a strong sense of community. </p>
                    <p>
                        Within this portfolio, you will discover the intersection of my academic pursuits and personal interests. As a software engineer, I am driven by a deep fascination with the stock market and its dynamic nature. I constantly seek opportunities to apply my knowledge and analytical skills to make informed investment decisions. With each day, I strive to expand my horizons and explore new possibilities in this exciting field.
                    </p>
                    <p>
                        While my focus is on the stock market, my ultimate goal is to find bigger opportunities in job roles that align with my passion for software engineering. Through my projects showcased here, you will witness the culmination of my technical expertise, problem-solving abilities, and dedication to creating user-centric applications.
                    </p>
                    <p>
                        Join me on this journey of discovery, where we can push the boundaries of what's possible in the realm of technology. Together, let's explore the fusion of innovation, functionality, and financial markets. I am open to new collaborations, challenges, and exciting career prospects that will allow me to make a meaningful impact in the software engineering field.
                    </p>
                    <p>
                        My name is Christopher Scotto, and I invite you to explore my portfolio, connect with me, and embark on an exciting path towards technological advancement.
                    </p>
                    <br />
                    <p>Thank you for visiting, and I look forward to connecting with you soon!
                    </p>
                    <br />
                    <p>
                        Best regards,
                        Christopher Scotto</p>

                </div>
                <div className="About-content-image">
                    <img src={process.env.PUBLIC_URL + '/images/main_logo1.png'} alt="Its me" />
                </div>

            </div>
        </section>
    );

}

export default About;