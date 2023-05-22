import React from 'react';
import data from '../data';

const Work = () => {

    const projectData = [...data];

    return (
        <div name="work" className="min-h-screen py-8"> 
            <div className="max-w-screen-xl mx-auto px-8 lg:px-36 flex flex-col justify-center w-full h-full"> 
                <div>
                    <h2 className="text-4xl inline border-b-4 border-emerald-600">Work</h2>
                     <p className="py-4">Tap or hover over the images for more information and links</p>
                </div>
               
                <div className="grid md:grid-cols-2 gap-4">
                    {projectData.map((project) => {
                        return (
                            <div key={project.title} class="shadow-[#040c16] mx-auto">
                                <a href={project.demo} target="_blank" rel="noreferrer" >
                                    <img src={project.image} alt={project.title} class="rounded-t-lg border-t border-x" />
                                </a>
                                <div class="p-4 pb-8 rounded-b-lg border-b border-x">
                                    <h3 class="mb-2 text-2xl lg:text-3xl text-[#ccd6f6]">{project.title}</h3>
                                    <p class="mb-6 text-white lg:text-lg xl:text-xl">{project.caption}</p>
                                    <a href={project.demo} target="_blank" rel="noreferrer" class="text-center rounded-lg px-4 py-3 my-2 bg-white text-gray-700 text-lg hover:bg-emerald-600 hover:text-white">
                                       Demo
                                    </a>
                                    <a href={project.code} target="_blank" rel="noreferrer" class="text-center rounded-lg px-4 py-3 ml-2 lg:ml-4 border text-white text-lg hover:bg-emerald-600 hover:border-emerald-600">
                                       Code
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Work