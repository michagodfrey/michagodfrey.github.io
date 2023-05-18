import React from 'react';
import HTML from '../assets/html.webp';
import CSS from '../assets/css.webp';
import JavaScript from '../assets/javascript.webp';
import ReactImg from '../assets/react.webp';
import FireBase from '../assets/firebase.webp';
import GitHub from '../assets/github.webp';
import Tailwind from '../assets/tailwind.webp';
import Bootstrap from '../assets/bootstrap.webp';

const Skills = () => {
  return (
    <div name="skills" className="h-screen">
        <div className="max-w-screen-xl mx-auto px-8 lg:px-24 flex flex-col md:justify-center w-full h-full">
            <div>
                <h2 className="text-4xl inline border-b-4 border-emerald-600">Skills</h2>
                <p className="py-4">My tech stack. These are the languages, frameworks, libraries and platforms I'm most familiar with.</p>
            </div>
        
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
                    <p className="my-4">HTML</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img src={CSS} alt="CSS icon" className="w-20 mx-auto" />
                    <p className="my-4">CSS & Sass</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img src={JavaScript} alt="JavaScript icon" className="w-20 mx-auto" />
                    <p className="my-4">JavaScript</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img src={ReactImg} alt="React icon" className="w-20 mx-auto" />
                    <p className="my-4">React</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img src={Tailwind} alt="Tailwind icon" className="w-20 mx-auto" />
                    <p className="my-4">Tailwind</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img src={Bootstrap} alt="Bootstrap icon" className="w-20 mx-auto" />
                    <p className="my-4">Bootstrap</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img src={GitHub} alt="GitHub icon" className="w-20 mx-auto" />
                    <p className="my-4">GitHub</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img src={FireBase} alt="FireBase icon" className="w-20 mx-auto" />
                    <p className="my-4">FireBase</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills