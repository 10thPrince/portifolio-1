import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <div name='hero' className='bg-background w-full h-screen '>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-secondary'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-main-light'>Ntwari Prince</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#ce965f]'>I'm a full Stack Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on building
          responsive full-stack web applications.</p>
        <div>
          <button className='text-main-light border-main-light group border-2 px-6 py-3 my-2 flex items-center hover:bg-secondary hover:border-secondary'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-4' />
            </span>
          </button>

        </div>
      </div>
    </div>
  )
}

export default Hero