import React from 'react'
import { Link } from 'react-router-dom';

function BackButton() {
  return (
    <Link to="/" className="flex justify-between items-center py-2 w-11/12">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
             Back
        </button>
    </Link>
  )
}

export default BackButton