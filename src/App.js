import './App.css';
import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import Card from './components/Card.js';
import Footer from './components/Footer.js';
import Character from './components/Character.js';
import { BrowserRouter, Link, Route, Routes, Switch  } from 'react-router-dom';

function App() {;
  let [pageNumber, setpageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState({});
  let { info, results } = fetchedData;
  const [inputValue, setInputValue] = useState("");
  const [characterId, setCharacterId] = useState(1);


  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${inputValue}`;
  useEffect(() => {
    const getData = async () => {
      let response = await fetch(api);
      let data = await response.json();
      updateFetchedData(data);
    }
  getData()
  }, [api])

function handleNextPage() {
  setpageNumber(++pageNumber);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
    setpageNumber(1);
  };


  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route path="/" element={
      <>
      <Header onChange={handleInputChange} setpageNumber = {setpageNumber} />
      <div className="flex justify-center">
      <div className="w-11/12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:w-4/5 lg:w-3/5">
      <Card results={results} characterId={characterId} setCharacterId={setCharacterId}/>
      </div>
      </div>
      <div className='flex justify-center items-center mt-8'>
        <div class="inline-flex">
          <button onClick={() => setpageNumber(--pageNumber)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            Prev
          </button>
          <button onClick={() => handleNextPage(pageNumber)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            Next
          </button>
        </div>
      </div>
      <Footer />
      </>
        } />

        <Route path="/character" element={<Character characterId={characterId}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;