import React from 'react'
import Header from './Header';
import App from '../App';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
const Card = (props) => {
let cardDisplay;


if (props.results) {
  cardDisplay = props.results.map((x) => {
let {id, name, location, species, image} = x;
    return (
      <>
          <div key={id} onClick={() => {props.setCharacterId(id)}} className= 'flex flex-col border-2 border-green-500 font-semibold rounded'>
          <img src={image} alt={name} className=" object-contain"/>
          <Link to="/character" className='underline py-2 text-xl'>{name}</Link>
          </div>
      </>
    )
  })
  }
  return (
    <>{cardDisplay}</>
  )
}


export default Card;



