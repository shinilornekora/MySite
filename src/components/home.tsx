import React from 'react';
import '../style/home.css'
// @ts-ignore
//import video__motion from './video/video3.mp4'
// @ts-ignore
//import video__games from './video/video1.mp4'
// @ts-ignore
//import video__game from './video/video4.mp4'
const Home = () => {
    return (
        <main>
            {/* This is for my home component */}
            <div className="content__wrapper">
                <h1 className="line">
                    For one who seeks, the gates shall open.
                    <br/>
                    <br/>
                </h1>
                <p className="about__me">
                    Greetings! Now you can see my personal page.
                    My name is Andrew aka Shiniasse, I am the frontend developer.<br/>
                    There you can find my resume, projects, blog and even books, header includes all of this. <br/>
                    This page was created in order to show you my skills and myself as personality.<br/>
                    There are some mine hobbies under this text.
                </p>
                <div className="motion-design">
                    <div className="motion-design__statement">
                        My passion is to create something from the pure void,
                        it means not only the websites, but many of the IT spheres.
                        As for an example, at once I was the pupil of the motion-designer
                        specialist, for whom I made this homework. That was my first but not last
                        work in this direction.
                    </div>
                    <div className="motion-design__video">
                        {/*<video src={video__motion}></video>*/}
                    </div>
                </div>
                <div className="wondershare__filmora">
                    <div className="wondershare__filmora__statement">
                        Sometimes I relax with my friends in video games - those are the
                        moments of the true happiness, because we can behave ourself freely,
                        by laughing about the funny situations that happen within our game or life,
                        talking over the important events that impact each of us, and so go on.
                        This is one of the videos which were made by me in the school times.
                    </div>
                    <div className="wondershare__filmora__video">
                        {/*<video src={video__games}></video>*/}
                    </div>
                </div>
                <div className="game__daralis">
                    <div className="game__daralis__statement">
                        Besides playing in video games, I also like to create them.
                        As for an example you can see my own game based on my meta reality.
                        This one is called Daralis, there's a lot of bugs in it, but hey,
                        the result is mostly measured by its idea)
                    </div>
                    <div className="game__daralis__video">
                        {/*<video src={video__game}></video>*/}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;