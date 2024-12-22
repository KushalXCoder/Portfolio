import {React, useState} from 'react';
import '../Styles/Body.css';
import react from '../Images/images(1).png';
import { motion } from "motion/react"
import About from './About';
import open from '../Images/open.png';
import close from '../Images/close.png';

const Body = () => {

    // Typewriter Animation Code

    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
    };

    const handleEnter = () => {
        document.querySelector(".my-image").src = open;
    }

    const handleLeave = () => {
        document.querySelector(".my-image").src = close;
    }

  return (
    <>
        <div className="body-container w-full h-[90%] flex">
            <div className="left h-full w-4/5 overflow-y-auto overflow-x-hidden relative scrollbar-webkit">
                <div className="box h-full w-full flex-col pt-48 mx-44 relative">
                    <motion.h1 className='welcome text-6xl font-bold font-newfont text-lightblue mb-1'
                        initial={{opacity: 0, x: -50}}
                        whileInView={{opacity: 1, x: 0, transition: {delay: 0.2, duration: 1}}}
                        viewport={{once: false, amount: 0.2}}
                    >
                            Welcome to my World !
                    </motion.h1>
                    <motion.h1 className='text-white font-bold text-6xl pl-1 text-lightblue mt-3'
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0, transition: {delay: 0.2, duration: 1}}}
                        viewport={{once: false, amount: 0.2}}
                    >
                        I'm the
                        <a href="" className='typewrite text-red-600 text-newred' data-period="2000" data-type = '[" Engineer", " Web Developer", " Designer", " Writter", " Atra Tatra Sarvatra"]'>
                            <span className="wrap"></span>
                        </a>
                        <br/>
                        of this world.
                    </motion.h1>
                    <motion.button className='bg-newhite w-3/5 px-7 py-4 text-xl rounded-md font-newfont mt-10 text-md hover:bg-newblue hover:text-newhite'
                        initial={{opacity: 0, x: -50}}
                        whileInView={{opacity: 1, x: 0, transition: {delay: 0.2, duration: 1}}}
                        viewport={{once: false, amount: 0.2}}
                        onMouseEnter={handleEnter}
                        onMouseLeave={handleLeave}
                    >
                        Explore the world !
                    </motion.button>
                    <motion.img 
                        src={close} alt="my-image" 
                        className='my-image absolute top-[-70px] right-[20%] h-4/5 rounded-2xl rotate-12 mix-blend-light' 
                        onMouseEnter={handleEnter} onMouseLeave={handleLeave} data-tooltip-target="tooltip-default"
                        initial={{opacity: 0, y: -200, rotate: -60}}
                        whileInView={{opacity: 1, y: 0 , rotate: 12, transition: {delay: 0.2, duration: 1}}}
                        viewport={{once: false, amount: 0.2}}
                    />
                    <motion.h1 className="text-[#fef08a] font-newfont text-2xl mt-32"
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0, transition: {delay: 0.2, duration: 1}}}
                    viewport={{once: false, amount: 0.2}}
                    >
                        <span className=''>Fun Fact</span> - I can speak English, Hindi, Gujarati and Basic Japanese.
                    </motion.h1>
                </div>
                <div className="about-container h-full w-full relative">
                    <About/>
                </div>
            </div>
            <div className="right h-full w-1/5 overflow-hidden relative flex items-center justify-center">
                <div className="carousel flex flex-col items-center relative">
                    <img src={react} alt="React" />
                    <img src={react} alt="NodeJS" />
                    <img src={react} alt="JavaScript" />
                    <img src={react} alt="CSS" />
                    <img src={react} alt="HTML" />
                    {/* Duplicate logos for seamless scrolling */}
                    <img src={react} alt="React" />
                    <img src={react} alt="NodeJS" />
                    <img src={react} alt="JavaScript" />
                    <img src={react} alt="CSS" />
                    <img src={react} alt="HTML" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Body