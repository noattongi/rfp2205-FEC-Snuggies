import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
 import { StyleBackground, Container, ModalBody } from '../StyledComponents.jsx/AddReviewModal.jsx';

var AddReviewModal = (props) => {

  const [isOpen, setIsOpen] = useState(false)
  const [bodySummary, setbodySummary] =  useState('')
  const [reviewBody, setReviewBody] =  useState('')
  const [nickname, setNickname] =  useState('')
  const [email, setEmail] =  useState('')
  const [selectedImage, setSelectedImage] = useState(null)

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
      console.log(reviewBody)
    }

    var handleSummaryChange = (event) => {
      setbodySummary(event.target.value)
      console.log(bodySummary)
    }

    var   onImageChange = event => {
      if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        setSelectedImage(URL.createObjectURL(img))
      }
    };

    return (
      <StyleBackground> <div className="modalBackground">
        <Container><div className="modalContainer">
          <div>
            <button onClick={props.closeModal}> X </button>
          </div>
          <div className="title">
            <h2>About the [Product Name Here]</h2>
          </div>
          <ModalBody><div className="body">
            <p>Star Rating: ⭐️⭐️⭐️⭐️⭐️</p>
            <div>
            <label>
              Recommend:
            <input type="radio" value="Yes" name="recommend" /> Yes
            <input type="radio" value="No" name="recommend" /> No
            </label>
            </div>
            <label>
            Characteristic:
            <input type="radio" value="1" name="1" /> A size too small
            <input type="radio" value="2" name="2" /> ½ a size too small
            <input type="radio" value="3" name="3" /> Perfect
            <input type="radio" value="4" name="4" /> ½ a size too big
            <input type="radio" value="5" name="5" /> A size too wide
            </label>
            <form >
              <label>
                Review Summary:
                <input type="text" placeholder="Example: Best purchase ever!" value={bodySummary} onChange={handleSummaryChange}/>
              </label>
              char count[count]
            </form>
            <form >
              <label>
                Review Body:
                <input type="text" placeholder="Why did you like the product or not?" value={reviewBody} onChange={handleReviewBodyChange}/>
              </label>

            </form>
            <label>
              Upload Image:
              <input type="file" name="myImage" onChange={onImageChange} />
            </label>
            <form >
              <label>
                Nickname:
                <input type="text" placeholder="Example: jackson11!" value={nickname} onChange={handleNicknameChange}/>
              </label>
            </form>
            <form >
              <label>
                Email:
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