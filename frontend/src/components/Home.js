import React from 'react';
import Footer from './Footer';

function Home() {
    return (
        <div>
            <div className="ui text container">
                <img className="ui medium image" src="https://images.vexels.com/media/users/3/157205/isolated/preview/5dd5e3530e81a4d5afdd883d27d43de2-black-and-white-pizza-icon-by-vexels.png" alt="" />
                <h2 className="ui header centered">
                    <div className="content">Will's Pizzeria</div>
                </h2>

                <div className="ui piled segment">
                    <h2>About this app</h2>
                    <p>
                        This pizza ordering app is inspired by an exisisting final project that I completed and submitted in my Node JS course (COMP 2912) at the British Columbia Institute of Technology.
                    I added a React flavour on the front end of the app to enhance user interface and user experience. <br /><br />
                    This app is built in MongoDB, Express, React, and Node (MERN) stack.
                </p>
                </div>

                <div className="ui piled segment">
                    <h2>About me</h2>
                    <p>Hello everyone,</p>
                    <p>
                        My name is William Gilbert Go. I am a hard-working developer with an aptitude for creating elegant solutions in the least amount of time. Building mobile-first, easy to use, user-friendly web applications is truly a passion of mine. I have developed online booking and registration systems, web portal, and casino-themed online games.
                </p>
                    <p>
                        As someone who is passionate about software architecture and cloud computing, I actively seek out new technologies and stay up-to-date on industry trends and innovations. In addition, I attend web developer meetups and hackathons in Vancouver.
                </p>
                </div>

                <div className="ui orange inverted center aligned circular segment">
                    <h2 className="ui header">
                        Visit my site <a className="ui white" href="https://devwilliamgo.github.io/williamgo/" target="_blank" rel="noopener noreferrer">here</a>
                    </h2>
                </div>
                <br /><br />
            </div>
            <Footer />
        </div>
    );
}

export default Home;