import React from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <>
        <nav className='w-full flex justify-between items-center px-32 cursor-pointer text-2xl rounded-b-lg'>
            <h1>Portfolio</h1>
            <div className="options">
                <ul className='flex gap-10'>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                </ul>
            </div>
            <div className="connect">
                <button className='me-5'><a href="https://www.linkedin.com/in/kushal-rathod-90b800297/" target='_blank'>LinkedIn</a></button>
                <button><a href="https://github.com/KushalXCoder" target='_blank'>GitHub</a></button>
            </div>
        </nav>
    </>
  )
}

export default Navbar