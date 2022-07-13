import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Cards from './Cards.jsx';
import Carousel from './Carousel.jsx';
import Add from './Add.jsx';

const OutfitList = (props) => {
  const [outfitProd, setOutfitProd] = useState([]);
  const handleAdd = (e) => {

  }
  return (
    <div>
      <h3>Outfit List</h3>
      <Add />
      <Cards />
      <Carousel />
    </div>
  )
}

export default OutfitList;