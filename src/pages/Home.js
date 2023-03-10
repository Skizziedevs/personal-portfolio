import React from "react";
import "../styles/Home.css";
import { FaLinkedinIn, FaGithub, FaYahoo} from "react-icons/fa"

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Kingsley</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <FaLinkedinIn />
          <FaYahoo />
          <FaGithub />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          
        </ol>
      </div>
    </div>
  );
}

export default Home;
