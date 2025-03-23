import React from 'react'

const Contact = () => {
  return (
    <div className='bg-background text-main-light w-full h-screen flex justify-center items-center p-4 pt-32' name='contact'>
        <form method='POST' action="https://getform.io/f/bpjjwqnb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-secondary text-main-light'>Contact</p>
                <p className='text-main-light py-4'>
                    //  Submit the form below or shoot me an email - ntwariprince5050@gmail.com
                </p>
            </div>
            <input type="text" className='bg-main-light p-2 rounded-md text-background' placeholder='Name' name='name' />
            <input type="email" className='bg-main-light my-4 p-2 rounded-md text-background' placeholder='Email' name='email'/>
            <textarea name="message" className='rounded-md bg-main-light p-2 text-background' id="" placeholder='Message' rows={7}></textarea>
            <button type='submit' className='rounded-md text-main-light border-2 hover:bg-secondary hover:border-secondary px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact