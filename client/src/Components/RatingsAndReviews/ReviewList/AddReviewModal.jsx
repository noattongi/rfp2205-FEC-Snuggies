import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { StyleBackground, Container, ModalBody } from '../StyledComponents/AddReviewModal.jsx';

var AddReviewModal = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [bodySummary, setbodySummary] =  useState('')
  const [reviewBody, setReviewBody] =  useState('')
  const [nickname, setNickname] =  useState('')
  const [email, setEmail] =  useState('')
  const [selectedImage, setSelectedImage] = useState(null)

  //Modal Input
  const [recommendInput, setRecommendInput] = useState(null)
  const [charCountSummary, setCharCountSummary] = useState(0)
  const [charCountBody, setCharCountBody] = useState(50)

  var toggleModal = (e) => {
    setIsOpen(!isOpen)
  }

    var handleEmailChange = (event) => {
      setEmail(event.target.value)
      console.log(email)
    }

    var handleNicknameChange = (event) => {
      setNickname(event.target.value)
      console.log(nickname)
    }

    var handleReviewBodyChange =(event) => {
      setReviewBody(event.target.value)
      if(charCountBody > 0) {
        setCharCountBody(50 - event.target.value.length)
      }
    }

    var handleSummaryChange = (event) => {
      setbodySummary(event.target.value)
      setCharCountSummary(event.target.value.length)
    }

    var onImageChange = event => {
      if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        setSelectedImage(URL.createObjectURL(img))
      }
    };

    var recommendOnChange = (event) => {
      if(event.target.value === 'Yes') {
        return setRecommendInput(true)
      } else if(event.target.value === 'No') {
        return setRecommendInput(false)
      }
    }

    return (
      <StyleBackground> <div className="modalBackground">
        <Container><div className="modalContainer">
          <div>
            <button onClick={props.closeModal}> X </button>
          </div>
          <div className="title">
            <h1>Write Your Review</h1>
            <h4>About the [Product Name Here]</h4>
          </div>
          <ModalBody><div className="body">
            <p>*Star Rating: ⭐️⭐️⭐️⭐️⭐️</p>
            <div>
            <label>
              *Recommend:
            <input type="radio" id='Yess' value="Yes" name="recommend" onChange={recommendOnChange}/> Yes
            <input  type="radio" id='Noo' value="No" name="recommend" onChange={recommendOnChange}/> No
            </label>
            </div>
            <label>
            *Characteristic:
            <input type="radio" value="1" name="Characteristic" /> A size too small
            <input type="radio" value="2" name="Characteristic" /> ½ a size too small
            <input type="radio" value="3" name="Characteristic" /> Perfect
            <input type="radio" value="4" name="Characteristic" /> ½ a size too big
            <input type="radio" value="5" name="Characteristic" /> A size too wide
            </label>
            <form >
              <label>
                Review Summary:
                <input type="text" placeholder="Example: Best purchase ever!" value={bodySummary} maxLength = "60" onChange={handleSummaryChange}/>
                {charCountSummary}/60
                </label>
            </form>
            <form >
              <label>
                *Review Body:
                <input type="text" placeholder="Why did you like the product or not?" value={reviewBody} maxLength = "1000" onChange={handleReviewBodyChange}/>
                Minimum required characters left: [{charCountBody}]
              </label>

            </form>
            <label>
              Upload Image:
              <input type="file" name="myImage" onChange={onImageChange} />
            </label>
            <form >
              <label>
                *Nickname:
                <input type="text" placeholder="Example: jackson11!" value={nickname} onChange={handleNicknameChange}/>
              </label>
            </form>
            <form >
              <label>
                *Email:
                <input type="text" placeholder="Example: jackson11@email.com" value={email} onChange={handleEmailChange}/>
              </label>
            </form>
          </div></ModalBody>
          <div className="footer">
            <button>Submit</button>
          </div>
        </div></Container>
      </div>/></StyleBackground>
    )
}

export default AddReviewModal;