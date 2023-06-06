import React, { useState, useEffect } from 'react';
import './pastprojects.css';
import ScrollReveal from 'scrollreveal';


const PastProjects = () => {
    const [selectedTab, setSelectedTab] = useState('ponder');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };
    useEffect(() => {
        ScrollReveal().reveal('.animated-right', {
            delay: 300,
            distance: '50px',
            origin: 'right',
            duration: 1200,
            easing: 'ease-out',
        });

        ScrollReveal().reveal('.animated-left', {
            delay: 300,
            distance: '50px',
            origin: 'left',
            duration: 1200,
            easing: 'ease-out',
        });
    }, []);

    const renderContent = () => {
        switch (selectedTab) {
            case 'ponder':
                return (
                    <div className="content">
                        <div className="content-text">
                            <h3>Ponder</h3>
                            <p>Ponder is a powerful tool designed to facilitate brainstorming and idea mapping. Having successfully utilized it in previous projects, I have dedicated my free time to continuously enhance its functionality. It is my pleasure to offer the code freely, allowing you to utilize and customize it according to your specific requirements and preferences.</p>
                            <p>Visit the Ponder website to learn more about this powerful tool and how it can help you achieve your goals.</p>
                            <div className="content-buttons">

                                <a href="https://github.com/chrisscotto79/Ponder-App" target="_blank" rel="noreferrer">
                                    <button className='github-button'>
                                        <span>Github Source Code</span>
                                    </button>
                                </a>
                                <a href=" https://chrisscotto79.github.io/Ponder-App/" target="_blank" rel="noreferrer">
                                    <button className='project-button'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
                                        <span>Launch</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                );
            case 'sfe':
                return (
                    <div className="content">
                        <div className='content-text'>
                            <h3>SFE</h3>
                            <p>Welcome to Scotto Financial Enterprise, your simplified stock market investing platform. We are committed to assisting you in navigating the complex world of the stock market by offering intuitive tools, educational resources, and valuable insights. Our goal at Scotto Financial Enterprise is to empower individuals like you to succeed in the stock market and capitalize on the financial opportunities it presents.

                                We firmly believe that the stock market has the potential to transform lives and build wealth. That's why we strive to make stock market investing accessible and understandable for everyone, regardless of their level of experience. Whether you're a seasoned investor or just starting out, we're here to provide you with the support and guidance you need.

                                Scotto Financial Enterprise is my long-term project, and I have ambitious plans to expand its offerings in the near future. As we continue to grow, we will keep you updated with exciting developments, new features, and valuable insights to enhance your investing journey.

                                Join us at Scotto Financial Enterprise and embark on a rewarding path towards financial success. Together, we'll navigate the stock market and unlock its potential for greater financial prosperity.</p>
                        </div>

                    </div>
                );
            case 'discord':
                return (
                    <div className="content">
                        <div className='content-text'>
                            <h3>Discord</h3>
                            <p>Discord has been the platform where I embarked on my coding adventure, and it has been the backdrop for multiple projects I have worked on. If you're curious about the commands I've created, feel free to explore my GitHub scripts, where you can find a collection of my Discord-related work. At the moment, Discord holds a special place in my heart as my favorite and most comfortable programming environment.</p>
                        </div>
                        <div className='content-buttons'>
                            <a href="https://github.com/chrisscotto79/Discord-commands" target="_blank" rel="noreferrer">
                                <button className='github-button'>
                                    <span>Github Source code</span>
                                </button>
                            </a>
                        </div>
                    </div>
                );
            case 'foodscraper':
                return (
                    <div className="content ">
                        <div className='content-text'>
                            <h3>Food Scraper</h3>
                            <p>Introducing "FoodPrice Scraper," a versatile and efficient solution for tracking food prices through Discord. This scraper, designed to operate with a simple command-based system, is capable of extracting valuable data from various websites and compiling it into a convenient CSV format.
                                <br />
                                Whether you prefer using Discord, a dedicated website, or even the terminal, FoodPrice Scraper offers flexibility and convenience in accessing the information you need. With just a few simple commands, you can scrape websites for crucial details such as product numbers, prices, and quantities, all with the aim of helping you make informed decisions when it comes to food shopping.
                                <br />
                                This project was originally developed as a personalized tool for my brother, but its potential extends far beyond that. By harnessing the power of web scraping technology, FoodPrice Scraper empowers users to monitor food prices effectively, providing valuable insights that can help optimize their budgeting and purchasing decisions.
                                <br />
                                With its capability to extract data and organize it into a CSV file, FoodPrice Scraper ensures easy data management and compatibility with a wide range of applications. The CSV format allows for seamless integration with spreadsheet software, data analysis tools, and even custom applications that leverage the extracted information.
                            </p>
                        </div>
                        <div className='content-buttons'>
                            <a href="https://github.com/chrisscotto79/food-webscraper-to-csv-" target="_blank" rel="noreferrer">
                                <button className='github-button'>
                                    <span>Github Source Code</span>
                                </button>
                            </a>
                        </div>


                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className='past-project-parent'>
            <h2 className='past-projects animated-left'>
                Past Projects
            </h2>

            <div className="box-with-tabs animated-right">
                <div className="sidebar">
                    <div
                        className={`tab ${selectedTab === 'ponder' ? 'active' : ''}`}
                        onClick={() => handleTabClick('ponder')}
                    >
                        Ponder
                    </div>
                    <div
                        className={`tab ${selectedTab === 'sfe' ? 'active' : ''}`}
                        onClick={() => handleTabClick('sfe')}
                    >
                        SFE
                    </div>
                    <div
                        className={`tab ${selectedTab === 'discord' ? 'active' : ''}`}
                        onClick={() => handleTabClick('discord')}
                    >
                        Discord
                    </div>
                    <div
                        className={`tab ${selectedTab === 'foodscraper' ? 'active' : ''}`}
                        onClick={() => handleTabClick('foodscraper')}
                    >
                        Food Scraper
                    </div>
                </div>
                <div className="content-container">{renderContent()}</div>
            </div>
        </div>
    );
};

export default PastProjects;
