import './App.css';
import Header from './components/Header';
import React, { useState, useEffect } from 'react'
import Card from './components/Card.js';
import Footer from './components/Footer.js';

function App() {
  let [pageNumber, setpageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState({});
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  useEffect(() => {
    const getData = async () => {
      let response = await fetch(api);
      let data = await response.json();
      updateFetchedData(data);
    }
  getData()
  }, [api])
  return (
    <div className="App">
      <Header />
      <div className="flex justify-center">
      <div className="w-11/12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:w-4/5 lg:w-3/5">
      <Card results={results}/>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default App;
