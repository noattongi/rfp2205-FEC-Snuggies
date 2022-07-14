import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const OutfitCards = (props) => {
  async function deleteProd(id) {
    var temp = props.outfitProd;
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].id === id) {
        temp.splice(i, 1);
      }
    }
    return temp;
  }
  const handleDelete = (id) => {
    deleteProd(id)
    .then((data) => {
      props.setOutfitProd(data)
    })
  }
  return (
    <>
    {props.outfitProd?.map((prod) => {
      return (
          <div>
            <div onClick = {(e) => {handleDelete(prod.id)}}>❌</div>
            <p>{prod.category}</p>
            <p>{prod.name}</p>
            <p>{prod.default_price}</p>
            <p>Star Rating</p>
          </div>
       )})}
       </>
  )
}

export default OutfitCards;
