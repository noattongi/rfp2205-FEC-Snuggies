import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import OutfitCards from './OutfitCards.jsx';
import OutfitCarousel from './OutfitCarousel.jsx';
import styled from 'styled-components'

const OutfitList = (props) => {
  const [outfitProd, setOutfitProd] = useState([]);
  const [outfitId, setOutfitId] = useState([40344]);
  const [currentView, setCurrentView] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    outfitRender(index)
    .then((data) => {
      Promise.all(data)
      .then((value) => {
        setOutfitProd(value)
      })
      .catch((error) => {
        console.log('useEffect error', error)
      })
    })
  }, [outfitId, index])

  async function outfitRender(index) {
    var temp = [];
    var sliced = outfitId.slice(index, index + 4);
    for (var i = 0; i < sliced.length; i++) {
      temp.push(props.getProduct(sliced[i]));
    }
    if (temp.length <= 4) {
      return temp;
    } else {
      return console.log('error in outfitRender')
    }

  }

  const addOutfitId = (id) => {
    // if (outfitId.indexOf(id) > -1) {
    //   return setOutfitId(outfitId);
    // } else {
    //   console.log(outfitId);
      return setOutfitId([...outfitId, id])
    // }
  }

  return (
    <div>
      <h3>Outfit List</h3>
      <Row>
        <AddContainer>
          <button onClick={(e) => {addOutfitId(40346)}}>+</button>
        </AddContainer>
          <OutfitCards outfitId={outfitId} outfitProd={outfitProd} setOutfitId={setOutfitId} currentView={currentView} setCurrentView={setCurrentView}/>
        <CarouselContainer>
          {Boolean(outfitId.length > 4) ? <OutfitCarousel outfitRender={outfitRender} setIndex={setIndex} index={index} outfitId={outfitId}/> : null}
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