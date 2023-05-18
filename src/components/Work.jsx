import React from 'react';
import data from '../data';

const Work = () => {

    const projectData = [...data];

    return (
        <div name="work" className="min-h-screen"> 
            <div className="max-w-screen-xl mx-auto px-8 lg:px-24 lg:pt-24 flex flex-col w-full h-full"> 
                <div className="pb-8">
                    <h2 className="text-4xl inline border-b-4 border-emerald-600">Work</h2>
                    <p className="py-6">Tap or hover over the images for more information and links</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    {projectData.map((project) => {
                        return (
                            <div key={project.title} className="group relative shadow-lg shadow-[#040c16] rounded-lg mx-auto">
                                <img src={project.image} alt={project.title} className="rounded-lg" />
                                <div className="absolute h-[33%] -translate-y-[100%] overflow-hidden group-hover:h-[100%] duration-500 bg-black/90 w-full rounded-b-lg group-hover:rounded-lg flex flex-col p-4">
                                <h3 className="mb-[15%] mt-[5%] text-xl sm:text-2xl lg:text-3xl text-white tracking-wider border-b-4 w-fit">
                                {project.title}
                                </h3>
                                <div>
                                    <span className="text-white lg:text-lg xl:text-xl">
                                        {project.caption}
                                    </span>
                                    <div className="mt-[5%]">
                                        <a href={project.demo} target="_blank" rel="noreferrer">
                                            <button className="text-center rounded-lg px-4 py-1 lg:py-3 my-2 bg-white text-gray-700 text-lg hover:bg-emerald-600 hover:text-white">Demo</button>
                                        </a>
                                        <a href={project.code} target="_blank" rel="noreferrer">
                                            <button className="text-center rounded-lg px-4 py-1 lg:py-3 ml-2 lg:ml-4 border text-white text-lg hover:bg-emerald-600 hover:border-emerald-600">Code</button>
                                        </a>
                                    </div>
                                </div>
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