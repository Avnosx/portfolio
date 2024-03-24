import React from 'react'
import heroImage from "../assets/heroImage.png"
import { FaLongArrowAltRight } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full 
    bg-gradient-to-b from-black via-black bg-gray-800 py-8'>
        <div className='max-w-screen-lg mx-auto flex
        flex-col items-center justify-center h-full px-4 
        md:flex-row mt-6'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className="text-4xl sm:text-6xl font-bold text-white">
                <TypeAnimation
      sequence={[
        'I Am a Frontend Developer',
        1000,
        'I Am a Backend Developer',
        1000,
        'I Am an AI/ML Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      cursor={false}
    />
                </h2>
                <p className='text-gray-500 py-4 max-w-screen-md'>
                  I have 2 years of experience in developing and designing websites.
                  Currently I love to work with AI/ML models and to work in Web3.
                  The tech frameworks I like the most are React , Tailwind , NextJS, NodeJs and RestAPI with Axios.
                </p>
            <div>
              <Link to='portfolio' smooth duration={500}>
            <button className='group text-white w-fit px-6 py-3 my-2 flex 
            items-center rounded-md bg-gradient-to-r
             from-cyan-500 to-blue-500 cursor pointer'>
              Portfolio 
              <span className='group-hover:rotate-90 duration-300'>
              <FaLongArrowAltRight size={15} className='ml-1'/>
              </span>
            </button>
            </Link>
            </div>
        </div>
        <div>
          <img src={heroImage} alt="my profile"
          className='rounded-full mx-auto w-2/3 md:w-full' />
        </div>
    </div>
  </div>
  )
}

export default Home