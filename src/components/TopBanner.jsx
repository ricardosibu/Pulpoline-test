// import React from 'react'

export const TopBanner = ({ data }) => {
  return (
    <div className='bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-between text-white h-48 rounded-md ml-2'>
        <div className='flex flex-col justify-start text-left p-4 w-full md:w-1/3'>
            <h2 className='text-4xl font-semibold'>{data.title}</h2>
            <p className=' text-md mt-1'>{data.description}</p>
        </div>
        <img src={data.image_url} width={260} height={180} alt='menu-banner' />
    </div>
  )
}
