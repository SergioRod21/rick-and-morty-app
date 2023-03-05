import React from 'react'
import Header from './Header';
import App from '../App';
import { useState , useEffect } from 'react';

const Card = ({results}) => {
let cardDisplay;


if (results) {
  cardDisplay = results.map((x) => {
let {id, name, location, species, image} = x;
    return (
      <div key={id} className= 'flex flex-col border-2 border-green-500 font-semibold rounded'>
        <img src={image} alt={name} className=" object-contain"/>
        <h2>{name}</h2>
        <h2>{species}</h2>
        <h2>{location.name}</h2>
      </div>
    )
  })
  }
  return (
    <>{cardDisplay}</>
  )
}


export default Card;




