import React from 'react'

const About = () => {
  return (
    <div name="about" className="h-screen">
        <div className="flex flex-col items-center md:justify-center w-full max-w-screen-xl h-full px-8 lg:px-24 mx-auto">
            <div className="w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8">
                    <h2 className="text-4xl inline border-b-4 border-emerald-600">About</h2>
                </div>
                <div></div>
            </div>
            <div className="max-w-screen-xl w-full grid sm:grid-cols-2 gap-8">
                <div>
                    <p className="text-4xl sm:text-right">Coding is my calling! I am a self-taught web developer who is passionate about building things with code.</p>
                </div>
                <div>
                    <p className="leading-7">
                        I have built a strong foundation in front-end development using HTML, CSS and JavaScript as well as some associated libraries and frameworks. 
                        Helping people get their own space online is what I like best and <a href="https://michael-godfrey.com" className="underline">my web development service</a> offers that. 
                        As someone who is always seeking out new challenges and opportunities to grow, I am open to working with a team to contribute to the front-end and user experience of projects. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About