import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import OutfitCards from './OutfitCards.jsx';
import Carousel from './Carousel.jsx';

const OutfitList = (props) => {
  const [outfitProd, setOutfitProd] = useState([]);
  const handleAdd = (e) => {
    // need to refactor for current id
    props.getProduct(40344)
    .then((data) => {
      var temp = outfitProd;
      if (outfitProd.indexOf(data) > -1) {
        return temp;
      } else {
        temp.push(data);
        return temp;
      }
    })
    .then((list) => {
      // work on uniqueness later
      setOutfitProd(list);
    })
    .catch((error) => {
      console.log('Add button error', error)
    })
  }
  return (
    <div>
      <h3>Outfit List</h3>
      <button onClick={handleAdd}>+</button>
      <OutfitCards outfitProd={outfitProd} setOutfitProd={setOutfitProd}/>
      <Carousel />
    </div>
  )
}

export default OutfitList;