import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

const Home = () => {

    const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px' });
    const offsetValue = isLargeScreen ? 0 : -110;

    return (
        <div name="home" className="h-screen">
            <div className="max-w-screen-xl mx-auto px-8 lg:px-24 flex flex-col justify-center h-full w-full">
                <p className="text-emerald-600">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl text-[#ccd6f6]">Michael Godfrey</h1>
                <p className="text-2xl sm:text-5xl text-[#8892b0]">I'm a frontend web developer</p>
                <p className="py-4 max-w-[600px] text-[#8892b0]">
                    Welcome and thank you for visiting my portfolio. 
                    Here I showcase some selected projects and provide links to my social media pages.
                    Please have a look around and feel free to get in touch.
                </p>
                <div>
                    <button>
                        <Link to="work" smooth={true} duration={500} offset={offsetValue} className="text-white border-2 px-6 py-3 my-2 rounded-lg flex items-center group hover:bg-emerald-600 hover:border-emerald-600">
                            See Work
                            <span className="ml-3 group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight />
                            </span>
                        </Link>
                    </button>
                </div>      
            </div>

        </div>
    )
}

export default Home