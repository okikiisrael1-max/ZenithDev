import React from 'react'
import Title from './Title'

const Contact = () => {
  return (
    <div id='contact' className='pt-15'>
      <Title Title={'Contact Me'} Desc={'Let’s Build Something Amazing'}/>
      <div className='px-[10%]'>
        <form className='grid grid-cols-2 py-2.5 gap-2.5 w-full sm:w-1/2 mx-auto'>
            <div className='flex flex-col'>
                <label className='text-gray-400' htmlFor="name">Full Name</label>
                <input className='border border-gray-700 outline-0 bg-gray-800 rounded-lg text-white text-sm p-2.5' type="text" id='name' name='name' placeholder='Your name here...' />
            </div>
             <div className='flex flex-col'>
                <label className='text-gray-400' htmlFor="email">Email</label>
                <input className='border border-gray-700 outline-0 bg-gray-800 rounded-lg text-white text-sm p-2.5' type="email" id='email' name='email' placeholder='Your name here...' />
            </div>
            <div className='col-span-2 w-full flex flex-col'>
                <label className='text-gray-400' htmlFor="message">Message</label>
                <textarea className='h-40 flex flex-col border outline-0 border-gray-700 bg-gray-800 rounded-lg text-white text-sm p-2.5' name="message" id="message" placeholder='Your message here...'></textarea>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
