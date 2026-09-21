import React from 'react'
import Image from "next/image"

const Header = () => {
  return (
    <header className='P-6'>
      <div className='w-full h-32 sm:h-40 md:h-52 lg:h-64 object-cover'>
         <img src="/logo.png" alt="header"  className='object-center'/>
      </div>
      
      
    </header>
  )
}

export default Header