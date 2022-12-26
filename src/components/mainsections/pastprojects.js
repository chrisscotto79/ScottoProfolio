import React, {useEffect} from "react";
import "./pastprojects.css"
import Aos from "aos";

function PastProjects(){
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener, noreferrer');
    };
    useEffect(() =>{
        Aos.init({duration: 2000})
    }, []);
    

    return(
        <>
        {/* Create a frozen box filled with past projects */}
        <div className="pastProjects">
            
            <div className="parent">
                <div className="Heading">
                        <h3>Projects</h3>
                </div>
                <div className="nest">
                    {/* Ponder */}
                    <div data-aos="fade-in" data-aos-duration="4000" className="tab-column">
                        <h2 onClick={() => openInNewTab('https://chrisscotto79.github.io/Ponder-App/')}>
                            Ponder 🔗
                        </h2>
                        <p>Ponder is to ease the way of brainstoming
                         and mapping out ideas. I used it for some of my other
                         projects in the past. Ponder is a small project
                         that is currently being updated throughout free time. 
                         The code that is posted is free to use and modify however 
                         you'd like.
                        </p>
                        <div className="button-layout">
                            <button onClick={() => openInNewTab('https://github.com/chrisscotto79/Ponder-App/')} className="buttonstyle">Github Script</button>
                        </div>
                    </div>

                    {/* Discord */}
                    <div data-aos="fade-in" data-aos-duration="4000" className="tab-column">
                        <h2>
                            Discord
                        </h2>
                        
                        <div>
                            <p>
                            Multiple projects that have been assosiated 
                            with discord. Discord is where I started my 
                            coding adventure. Visit my github scripts on
                            github to see some of the commands I have created.
                            As of the momment, Discord is currently my favorite
                            and most comfortable area to program.
                        </p>
                        <div className="button-layout">
                            <button onClick={() => openInNewTab('https://github.com/chrisscotto79')} className="buttonstyle">Github Script</button>
                        </div>
                        </div>
                    </div>
                
                    {/* Scraper */}
                    <div data-aos="fade-in" data-aos-duration="4000" className="tab-column">
                        <h2>
                            Food Scraper
                        </h2>
                        <p>
                            A Discord bassed food price Scraper. Currently ran
                            with a discord command based action but can be 
                            rewritten with a website or soley through the terminal.
                            Scrapes the given website to get the product number, price,
                            and quantity to a CSV. Small project created for my brother.
                            

                        </p>
                        <div className="button-layout">
                            <button onClick={() => openInNewTab('https://github.com/chrisscotto79')} className="buttonstyle">Github Script</button>
                        </div>
                    </div>

                    {/* Stocks */}
                    <div data-aos="fade-in" data-aos-duration="4000" className="tab-column">
                        <h2>
                            Atlas
                        </h2>
                        <p>
                            Atlas is my main project. The goal is to 
                            make it a brokerage that allows trading on either
                            the crypto or stock market. It also will have a 
                            simplicity of that makes learning about the stock
                            market easier. As of right now, it displays the crypto 
                            market to what is being traded and a learning section.
                            This is a multiyear project and one that has been worked on
                            since October 2021.
                        </p>
                    </div>
                </div>
            </div>       
        </div>
        </>
    );
};

export default PastProjects;