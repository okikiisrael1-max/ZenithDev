import React from 'react'

const Title = ({Title, Desc}) => {
  return (
    <div className='flex flex-col mt-5'>
      <h1 className='text-3xl text-center font-bold text-white'>{Title}</h1>
      <div className='h-1.5 w-15 bg-linear-90 from-20% mb-2.5 from-purple-600 to-blue-600 rounded-full mx-auto'/>
      <p className='text-center text-gray-400'>{Desc}</p>
    </div>
  )
}

export default Title
