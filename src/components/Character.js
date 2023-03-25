import React from 'react'
import Header from './Header';
import Card from './Card';
import App from '../App';
import BackButton from './BackButton';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Character ({characterId})  {
  let [fetchedData, updateFetchedData] = useState({});
  let [backgroundColor, setBackgroundColor] = useState("bg-gray-100");
  let api = `https://rickandmortyapi.com/api/character/${characterId}`;
  useEffect(() => {
    const getData = async () => {
      let response = await fetch(api);
      let data = await response.json();
      updateFetchedData(data);
    }
  getData()
  }, [api])

function handleBackgroundColor() {
  if (fetchedData.status === "Alive") {
    setBackgroundColor("bg-green-300");
  } else if (fetchedData.status === "Dead") {
    setBackgroundColor("bg-red-300");
  } else {
    setBackgroundColor("bg-gray-100");
  }
}

useEffect(() => {
  handleBackgroundColor();
}, [fetchedData])


  let {id, name, location, species, image, status} = fetchedData;



  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <BackButton />
        <div className={`w-full h-3/5 md:border rounded-xl flex flex-col md:flex-row justify-around items-center md:w-11/12 md:px-8 lg:px-12 xl:w-3/4`}>
          <img src={image} className="w-full md:w-2/5 lg:w-5/12 xl:w-2/6 md:rounded-2xl" alt="" />
          <div className='flex flex-col items-center mt-2'>
            <h1 className='text-3xl md:text-4xl font-bold mb-2'>{name}</h1>
            <p className='text-xl'><span className='font-medium'>Species: </span>{species}</p>
            <p className="text-xl"><span className='font-medium'>Status: </span><span className={`rounded ${backgroundColor}`}>{status}</span></p>

          </div>
        </div>
    </div>
  );
}
export default Character