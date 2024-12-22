import {React, useRef, useEffect, useState} from 'react';
import '../Styles/About.css';
import aboutme from '../Images/about-me.png';
import { motion, useAnimation, useInView } from "framer-motion";
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

const About = () => {

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <motion.div 
      className="about-box h-4/5 w-full bg-[#1f2937] rounded-lg"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      viewport={{ once: false, amount: 0.2 }}
      >
        <div className="about-box-top h-[10%] w-full flex justify-between items-center px-5">
          <div className="circles flex gap-3">
            <div className="red-circle h-[20px] w-[20px] bg-newred rounded-full"></div>
            <div className="blue-circle h-[20px] w-[20px] bg-[#2563eb] rounded-full"></div>
            <div className="yellow-circle h-[20px] w-[20px] bg-[#facc15] rounded-full"></div>
          </div>
          <div className="language font-newfont bg-[#000000] rounded-md text-[#e2e8f0] px-3 py-1">JavaScript</div>
        </div>
        <pre className="about-box-bottom h-[90%] w-full text-md overflow-auto">
          <code className="language-javascript text-xl">
          {`
          document.querySelector("About Me");

          const personalInfo = {
            name: "Kushal Rathod",
            title: "Full Stack Developer & AI Enthusiast",
            contact: {
              email: "kushalrathod044@gmail.com",
              linkedIn: "https://www.linkedin.com/in/kushal-rathod-90b800297/", // LinkedIn link
              github: "https://github.com/KushalXCoder" // GitHub link
            }
          };

          const skills = {
            core: ["Engineering", "FrontEnd", "BackEnd", "AI"],
            languages: ["HTML", "CSS", "JavaScript", "C++", "Python"],
            frameworks: ["ReactJS", "Tailwind", "Bootstrap", "NodeJS", "MongoDB"],
            tools: ["VSCode", "GitHub"]
          };

          const hobbies = [
            "Obviously Coding", "Watching Sports", "Listening Music", "Web Series", "Travelling"
          ];

          const description = [
            "I am a Coding enthusiast, with interest in Web Development",
            "I mainly intended towards front end, with keen interest in Backend",
            "I like participating in Hackathon and Events",
            "I am currently a member of ACM AU Student Chapter"
          ];`}
          </code>
        </pre>
      </motion.div>
    </>
  )
}

export default About