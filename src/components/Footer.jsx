import React from 'react'

const Footer = () => {
  return (
    <div className='py-8 bg-dark-300'>
        <div className='container mx-auto px-6 text-center'>
            <p onClick={() => {}} className='text-gray-400'>
                &copy; {new Date().getFullYear()} Created By Santosh Gurkhe. All rights reserved.
            </p>

        </div>

    </div>
  )
}

export default Footer