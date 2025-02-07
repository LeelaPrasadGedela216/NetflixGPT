import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video   absolute pl-6 lg:pl-20 flex flex-col justify-center my-auto pt-[10%] bg-gradient-to-r from-black'>
      <div className='w-3/12  text-white'>
      <h1 className='text-4xl font-bold mb-2 '>{title}</h1>
      <p className='text-base '>{overview}</p>
      </div>
      <div className='flex my-4'>
        <div><button className='px-8 py-2 bg-gray-50 text-black mx-2 rounded-lg text-lg font-bold hover:bg-gray-400'>▶Play</button></div>
        <div><button className='px-8 py-2  bg-gray-50 text-black mx-2 rounded-lg text-lg font-bold  hover:bg-gray-400'> ⨀more info</button></div>
      </div>
    </div>
  )
}

export default VideoTitle
