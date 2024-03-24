import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto
        flex flex-col justify-center w-full h-full">
            <div className="pb-5">
            <p className="text-4xl font-bold inline border-b-4
            border-gray-500">About</p>
            </div>
       
        <p className="text-xl mt-20">
        An emerging full stack developer and tech enthusiast.
Currently a sophomore at National Institute of Technology Rourkela , pursuing Electrical Engineering.
Technology excites me and I am always curious of new tech that drives the world. Certain skills that I have worked include Web development (MERN) , Git & Machine learning (Python & TF). I'm currently interested in DSA and actively learning.
Outside of Tech I also love playing table tennis and various online multiplayer games.     </p>
        <br />
        <p className="text-xl">
Apart from dev I also like to delve into the sea of DSA as a secondary interest. Do check out my Leetcode profile.       </p>
        </div>
    </div>
  )
}

export default About