import React from 'react'
import logo from '../images/Rick-and-Morty.png'
import SearchBar from './SearchBar.js'


function Header() {
  return (
    <div className='flex flex-col w-screen justify-between items-center px-4 py-6 border-b-black border-b-2'>
      <img className='w-3/6 md:w-2/5 lg:w-2/6 xl:w-1/6' src={logo} alt="" srcset="" />
      <div className='w-2/4'><SearchBar /></div>
    </div>
  )
}

export default Header;