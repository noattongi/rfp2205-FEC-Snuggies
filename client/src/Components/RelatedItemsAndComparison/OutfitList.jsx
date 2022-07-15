import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import OutfitCards from './OutfitCards.jsx';
import Carousel from './Carousel.jsx';
import styled from 'styled-components'

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
      <Row>
        <AddContainer>
          <button onClick={(e) => {addOutfitId(40346)}}>+</button>
        </AddContainer>
          <OutfitCards outfitId={outfitId} outfitProd={outfitProd} setOutfitId={setOutfitId}/>
        <CarouselContainer>
          <Carousel />
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