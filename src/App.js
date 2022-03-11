import React from "react";

import MailSVG from "./icon/mail.svg";
import LinkedinSVG from "./icon/linkedin.svg";
import TwitterSVG from "./icon/Twitter-Icon.svg";
import FacebookSVG from "./icon/Facebook-Icon.svg";
import InstagramSVG from "./icon/Instagram-Icon.svg";
import GithubSVG from "./icon/GitHub-Icon.svg";

import myPortrait from "./img/portrait.jpg";

function Card() {
  return (
    <div className="card">
      <div className="portrait">
        <img src={myPortrait} alt="me" />
      </div>
      <div className="info">
        <h2>CHEN, YuPung</h2>
        <p>Front-End Engineer</p>
        <a href="">YuPung.website</a>
        <div className="contact" data-link="website">
          <a href="" data-link="mail">
            <MailSVG />
            <p>Email</p>
          </a>
          <a href="" data-link="linkedin">
            <LinkedinSVG />
            <p>Linkedin</p>
          </a>
        </div>
        <section className="article">
          <h4 className="article--title">About</h4>
          <p className="content">
            Hello, I'm YuPung. I have learned using HTML/CSS/JavaScript to build
            web apps. And able to make prototype by Figma. Since meeting
            programming in my last job, I'm fascinated by it, especially for the
            wide use of webpages, which makes me to decide to change career.
          </p>
        </section>
        <section className="article">
          <h4 className="article--title">Interests</h4>
          <p className="content">
            Programming, playing music and climbing mountains!
          </p>
        </section>
      </div>
      <div className="contact" data-link="social">
        <TwitterSVG />
        <FacebookSVG />
        <InstagramSVG />
        <GithubSVG />
      </div>
    </div>
  );
}

export default function App() {
  return <Card />;
}
