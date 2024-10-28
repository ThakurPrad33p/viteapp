import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-slate-900'>
        <div className='flex items-center gap-1'>
            <img className='w-10 h-10' src='logo.jpg' alt="logo" />
            <h1 className='text-white font-bold text-2xl cursor-pointer'>3dfy</h1>
        </div>
        <div className='rounded-full cursor-pointer bg-pink-500'>
          <h1 className='font-bold text-2xl text-white  px-4 py-2'>P</h1>
        </div>
    </div>
  )
}

export default Header