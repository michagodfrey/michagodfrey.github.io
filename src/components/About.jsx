import React from 'react'

const About = () => {
  return (
    <div name="about" className="min-h-screen py-8 grid">
      <div className="flex flex-col items-center justify-center w-full max-w-screen-xl h-full px-8 lg:px-36 mx-auto">
        <div className="w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <h2 className="text-4xl inline border-b-4 border-emerald-600">
              About
            </h2>
          </div>
          <div></div>
        </div>
        <div className="max-w-screen-xl w-full grid sm:grid-cols-2 gap-8">
          <div>
            <p className="text-4xl sm:text-right">
              Coding is my calling! I'm a self-taught developer with a passion
              for building and exploring the possibilities of the digital world.
            </p>
          </div>
          <div>
            <p className="leading-7">
              I got into tech during the lockdowns and quickly realized how much
              I enjoy building things with code. The challenges of
              problem-solving and creating something from scratch really
              resonated with me. Since then, I've been diving deeper into
              development, constantly learning and improving my skills. I now
              maintain my main{" "}
              <a href="https://michael-godfrey.com" className="underline">
                website
              </a>{" "}
              which includes a blog where I share insights and experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About