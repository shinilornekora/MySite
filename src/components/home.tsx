import React from "react";
import "../style/home.css";
import MainCard from "./common/mainCard";

// TODO: Разобраться с видео
const Home = () => {
  return (
    <main>
      This is for my home component
      <div className="content__wrapper">
        <h1 className="line">
          For one who seeks, the gates shall open.
          <br />
          <br />
        </h1>
        <p className="about__me">
          Greetings! Now you can see my personal page. My name is Andrew aka
          Shiniasse, I am the frontend developer.
          <br />
          There you can find my resume, projects, blog and even books, header
          includes all of this. <br />
          This page was created in order to show you my skills and myself as
          personality.
          <br />
          There are some mine hobbies under this text.
        </p>
        <MainCard
          description=" My passion is to create something from the pure void,
                        it means not only the websites, but many of the IT spheres.
                        As for an example, at once I was the pupil of the motion-designer
                        specialist, for whom I made this homework. That was my first but not last
                        work in this direction."
          staticPath={"video__motion"}
          blockClassName={"motion-design"}
          textSectionClassName={"motion-design__statement"}
          videoSectionClassName={"motion-design__video"}
        />
        <MainCard
          description="Sometimes I relax with my friends in video games - those are the
                        moments of the true happiness, because we can behave ourself freely,
                        by laughing about the funny situations that happen within our game
                        or life, talking over the important events that impact each of us,
                        and so go on. This is one of the videos which were made by me in the
                        school times."
          staticPath={"video__games"}
          blockClassName={"wondershare__filmora"}
          textSectionClassName={"wondershare__filmora__statement"}
          videoSectionClassName={"wondershare__filmora__video"}
        />
        <MainCard
          description="Besides playing in video games, I also like to create them. As for
                        an example you can see my own game based on my meta reality. This
                        one is called Daralis, there's a lot of bugs in it, but hey, the
                        result is mostly measured by its idea)"
          staticPath={"video__game"}
          blockClassName={"game__daralis"}
          textSectionClassName={"game__daralis__statement"}
          videoSectionClassName={"game__daralis__video"}
        />
      </div>
    </main>
  );
};

export default Home;
