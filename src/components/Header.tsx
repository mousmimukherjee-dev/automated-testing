import React from 'react'
import Image from "next/image"

const Header = () => {
  return (
    <header className='P-6'>
      
      <img src="/logo.png" alt="header"  className='w-full h-90 object-cover object-center'/>
    </header>
  )
}

export default Header