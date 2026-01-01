import React from 'react'
import Title from './Title'

const Service = () => {
  return (
    <div id='service' className='pt-15'>
      <Title Title={`My Services`} Desc={'What I Can Do For You'} />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-[10%] mt-2.5'>
        <div className='border border-gray-500 rounded-lg bg-gray-800 text-center px-2.5 py-3.5 hover:border-purple-700 transition'>
            <h1 className='text-5xl text-transparent bg-linear-90 from-purple-600 to-blue-600 bg-clip-text font-black'><i class="bi bi-code-slash"></i></h1>
            <h1 className='text-lg font-bold bg-linear-150 from-blue-500 to-purple-700 bg-clip-text text-transparent'>Custom Web Development</h1>
            <p className='text-gray-400 text-sm'>Build tailored React applications for your business or personal projects.</p>
        </div>
        <div className='border border-gray-500 rounded-lg bg-gray-800 text-center px-2.5 py-3.5 hover:border-purple-700 transition'>
            <h1 className='text-5xl text-transparent bg-linear-90 from-purple-600 to-blue-600 bg-clip-text font-black'><i class="bi bi-brush-fill"></i></h1>
            <h1 className='text-lg font-bold bg-linear-150 from-blue-500 to-purple-700 bg-clip-text text-transparent'>Responsive Design & UI/UX</h1>
            <p className='text-gray-400 text-sm'>Create beautiful interfaces that work perfectly on any device.</p>
        </div>
        <div className='border border-gray-500 rounded-lg bg-gray-800 text-center px-2.5 py-3.5 hover:border-purple-700 transition'>
            <h1 className='text-5xl text-transparent bg-linear-90 from-purple-600 to-blue-600 bg-clip-text font-black'><i class="bi bi-file-earmark-fill"></i></h1>
            <h1 className='text-lg font-bold bg-linear-150 from-blue-500 to-purple-700 bg-clip-text text-transparent'>Landing Pages & Marketing Sites</h1>
            <p className='text-gray-400 text-sm'>Design high-converting landing pages for startups and freelancers.</p>
        </div>
        <div className='border border-gray-500 rounded-lg bg-gray-800 text-center px-2.5 py-3.5 hover:border-purple-700 transition'>
            <h1 className='text-5xl text-transparent bg-linear-90 from-purple-600 to-blue-600 bg-clip-text font-black'><i class="bi bi-gear-wide-connected"></i></h1>
            <h1 className='text-lg font-bold bg-linear-150 from-blue-500 to-purple-700 bg-clip-text text-transparent'>Maintenance & Support</h1>
            <p className='text-gray-400 text-sm'>Keep your website running smoothly with updates and bug fixes.</p>
        </div>
      </div>
    </div>
  )
}

export default Service
