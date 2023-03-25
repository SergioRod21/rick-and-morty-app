import React, { useState , useEffect } from 'react'
import logo from '../images/Rick-and-Morty.png'
import { Link  } from 'react-router-dom';

const Header = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    props.onChange(inputValue);
  }, [inputValue]);

  return (
    <div className='flex flex-col w-screen justify-between items-center px-4 py-6'>
    <Link to="/" className='w-3/5 md:w-2/5 lg:w-2/6 xl:w-1/6'>
      <img className='' src={logo} alt="" srcset="" />
    </Link>
      <div className='w-3/4 md:w-2/4'>
      <form class="flex items-center">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
              <input type="text" value={inputValue} onChange={handleInputChange} id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>
          </div>
      </form>
      </div>
    </div>
  )
}

export default Header;