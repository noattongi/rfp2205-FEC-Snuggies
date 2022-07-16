import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import OutfitCards from './OutfitCards.jsx';
import OutfitCarousel from './OutfitCarousel.jsx';
import styled from 'styled-components'

const OutfitList = (props) => {
  const [outfitProd, setOutfitProd] = useState([]);
  const [outfitId, setOutfitId] = useState([]);
  const [outfitIndex, setOutfitIndex] = useState([]);

  useEffect(() => {
    outfitRender(outfitIndex)
    .then((data) => {
      Promise.all(data)
      .then((value) => {
        setOutfitProd(value)
      })
      .catch((error) => {
        console.log('useEffect error', error)
      })
    })
  }, [outfitId, outfitIndex])

  async function outfitRender(index) {
    var temp = [];
    for (var i = 0; i < outfitId.length; i++) {
      temp.push(props.getProduct(outfitId[i]));
    }
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
      <Row>
        <AddContainer>
          <button onClick={(e) => {addOutfitId(props.productId)}}>+</button>
        </AddContainer>
          <OutfitCards outfitId={outfitId} outfitProd={outfitProd} setOutfitId={setOutfitId} outfitIndex={outfitIndex}/>
        <CarouselContainer>
          {Boolean(outfitId.length > 4) ? <OutfitCarousel outfitRender={outfitRender} setOutfitIndex={setOutfitIndex} outfitIndex={outfitIndex} outfitId={outfitId}/> : null}
        </CarouselContainer>
      </Row>
    </div>
  )
}

export default OutfitList;

// styled components
const Row = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
`

const CarouselContainer = styled.div`
  display: flex;
  place-content: center flex-end;
`;

const AddContainer = styled.div`
display: flex;
place-content : center flex-end;
`;