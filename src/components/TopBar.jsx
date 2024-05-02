// import React from 'react'

export const TopBar = () => {
  return (
    <div className='mx-auto p-2'>
        <div className='flex justify-between bg-white p-4 rounded-lg '>
            <div>
                <h1 className='text-3xl font-bold font-poppins text-left text-yellow-300 mb-1'>Food<span className=' text-orange-600'>Health</span></h1>
                <p className=' text-xl text-black text-left  font-poppins'>What do you want to eat today?</p>
            </div>
            <div className='hidden items-center justify-end space-x-2 w-4/6 lg:flex'>
                <input type='text' placeholder='Search' className='border-2 bg-white px-5 pr-16 rounded-lg text-sm w-10/12 h-14' />
                <button className="text-zinc-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
            </div>
        </div>
    </div>
  )
}
