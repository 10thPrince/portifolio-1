import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg';
import realestate from '../assets/projects/realestate.jpg';

const Work = () => {
  return (
    <div className='w-full md:h-screen text-main-light bg-background pt-20' name='work'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-secondary'>Work</p>
                    <p className='py-6'>// Check some of my recent work</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-background tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 m-2 bg-main-light text-background font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 m-2 bg-main-light text-background font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${realestate})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-background tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 m-2 bg-main-light text-background font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 m-2 bg-main-light text-background font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-background tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 m-2 bg-main-light text-background font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 m-2 bg-main-light text-background font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${realestate})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-background tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 m-2 bg-main-light text-background font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 m-2 bg-main-light text-background font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-background tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 m-2 bg-main-light text-background font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 m-2 bg-main-light text-background font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(${realestate})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-background tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 m-2 bg-main-light text-background font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 m-2 bg-main-light text-background font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default Work