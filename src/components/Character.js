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
        <div className={`w-full h-3/4 py-36 md:border rounded-xl flex flex-col md:flex-row justify-around items-center md:px`}>
          <img src={image} className="w-full md:w-2/6 md:rounded-2xl" alt="" />
          <div className='flex flex-col items-center mt-6 md:ml-12'>
            <h1 className='text-3xl md:text-4xl font-bold'>{name}</h1>
            <p className='text-xl'><span className='font-medium'>Species: </span>{species}</p>
            <p className="text-xl"><span className='font-medium'>Status: </span><span className={`rounded ${backgroundColor}`}>{status}</span></p>

          </div>
        </div>
    </div>
  );
}
export default Character