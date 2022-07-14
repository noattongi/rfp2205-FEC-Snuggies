import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import OutfitCards from './OutfitCards.jsx';
import Carousel from './Carousel.jsx';

const OutfitList = (props) => {
  const [outfitProd, setOutfitProd] = useState([]);
  const [outfitId, setOutfitId] = useState([40344]);

  useEffect(() => {
    outfitRender()
    .then((data) => {
      Promise.all(data)
      .then((value) => {
        setOutfitProd(value)
      });
    })

    // getRelated(40344)
    // .then((data) => {
    //   var temp = []
    //   data.forEach((id) => {
    //     temp.push(props.getProduct(id))
    //   })
    //   return temp;
    // })
    // .then((array) => {
    //   Promise.all(array)
    //   .then((values) => {
    //     setRelatedProd(values)
    //   })
    // })
    // .catch((error) => {
    //   console.log('useEffect error', error)
    // })
  }, [outfitId])

  async function outfitRender() {
    var temp = []
    outfitId.forEach((id) => {
      temp.push(props.getProduct(id))
    })
    return temp;
  }

  const addOutfitId = (id) => {
    if (outfitId.indexOf(id) > -1) {
      return setOutfitId(outfitId);
    } else {
      console.log(outfitId);
      return setOutfitId([...outfitId, id])
    }
  }

  return (
    <div>
      <h3>Outfit List</h3>
      <button onClick={(e) => {addOutfitId(40346)}}>+</button>
      <OutfitCards outfitId={outfitId} outfitProd={outfitProd} setOutfitProd={setOutfitProd}/>
      <Carousel />
    </div>
  )
}

export default OutfitList;