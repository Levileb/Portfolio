import { section } from 'framer-motion/m'
import React from 'react'
import image from "../assets/profile.svg";


const Projects = () => {
  return (
    <section id="projects" className='p-28 grid grid-cols-1 place-items-center h-screen pb-28'>
      <div className="sec-cont grid gap-6 content-center justify-center items-center text-center">
        <div className="title text-4xl font-bold">
          Featured Projects
        </div>
        <div className="content bg-white shadow-lg grid-cols-1 md:grid-cols-2 rounded-lg p-6 max-w-sm">
        <div className="image mb-4">
          <img src={image} alt="" className="w-full h-auto rounded-md" />
        </div>
        <div className="text">
            <div className="project-details">
            <h1 className="project-name text-2xl font-semibold mb-2">
              Project Name
            </h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Projects