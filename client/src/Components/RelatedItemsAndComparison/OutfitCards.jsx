import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const OutfitCards = (props) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
<<<<<<< HEAD
    // console.log('child component', props.outfitProd)
=======
    console.log('child component', props.outfitProd);
    setProducts(props.outfitProd.slice(props.outfitIndex, props.outfitIndex + 4))
>>>>>>> main
  }, [props.outfitProd, props.outfitId])

  async function handleDeleteClick(id) {
    if (props.outfitId.length > 1) {
      var temp = props.outfitId.splice(props.outfitId.indexOf(id) - 1, 1);
      return props.setOutfitId(temp);
    } else {
      return props.setOutfitId([]);
    }
  }
  return (
    <>
    {products?.map((prod) => {
      return (
          <CardBox key={prod.id}>
<<<<<<< HEAD
            {/* {console.log('mapped outfit', props.outfitProd)}
            {console.log('index', i)} */}
=======
>>>>>>> main
            <div onClick = {(e) => {handleDeleteClick(prod.id)}}>❌</div>
            <p>{prod.category}</p>
            <p>{prod.name}</p>
            <p>{prod.default_price}</p>
            <p>Star Rating</p>
          </CardBox>
       )})}
       </>
  )
}

export default OutfitCards;

// styled component
const CardBox = styled.div`
  position: flex;
  justify-content: flex-start;
  border: 1px solid black;
  text-align: center;
  margin: 20px;
  width: 19%;
`;