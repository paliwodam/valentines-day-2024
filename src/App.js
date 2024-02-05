import React, { useState, useRef, useEffect } from 'react'
import './App.css'
import backgroundImage from './jotaro.png'
import valentineImage from './valentine_new.png'
import gun from './gun_new.png'
import happyGif from './happy-cat_new.gif'

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  const [clickedNo, setClickedNo] = useState(false)
  const [clickedYes, setClickedYes] = useState(false)

  const [xPos, setXPos] = useState(null)
  const [yPos, setYPos] = useState()

  const buttonRef = useRef(null)

  const buttonStyle = {
    padding: '10px',
    paddingInline: '20px',
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '20px',
    borderRadius: '10%',
    color: 'white',
    fontSize: '40px',
    border: 'none',
  }

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: '12%',
    width: '100vw', // 100% of the viewport width
    height: '100vh', // 100% of the viewport height
    margin: 0, // Remove default margin
    padding: 0, // Remove default padding
    boxSizing: 'border-box', // Include padding and border in element's total width and height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }

  const textContent = (
    <div
      style={{
        padding: '10px',
        paddingInline: '20px',
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '20px',
        color: 'white',
        fontSize: '40px',
        border: 'none',
        backgroundColor: 'pink',
      }}
    >
      LESGOOOO see you on the 14th pretty boi :*
    </div>
  )

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleNoButtonClick = () => {
    setClickedNo(true)

    const buttonWidth = buttonRef.current.clientWidth
    const buttonHeight = buttonRef.current.clientHeight

    const maxXPos = windowWidth - (buttonWidth * 2.2 || 0)
    const maxYPos = windowHeight - (buttonHeight * 2.2 || 0)

    setXPos(Math.floor(Math.random() * maxXPos + buttonWidth))
    setYPos(Math.floor(Math.random() * maxYPos + buttonHeight))
    console.log(xPos, yPos)
  }

  if (clickedYes) {
    return (
      <div style={backgroundStyle}>
        <img
          src={happyGif}
          alt="Animated GIF"
          style={{
            // width: '30%', // Adjust the width as needed
            width: '400px', // Adjust the width as needed
            height: 'auto',
            // height: '443px', // Adjust the height as needed
          }}
        />
        {textContent}
      </div>
    )
  } else {
    return (
      <div style={backgroundStyle}>
        <div
          style={{
            backgroundImage: clickedNo
              ? `url(${gun})`
              : `url(${valentineImage})`,
            width: '400px', // Adjust the width as needed
            height: '443px', // Adjust the height as needed
            backgroundSize: 'contain', // or 'cover' based on your preference
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'white',
            marginBottom: '20px', // Adjust the margin as needed
          }}
        ></div>

        <div>
          <button
            onClick={() => {
              setClickedYes(true)
            }}
            style={{ ...buttonStyle, backgroundColor: 'green' }}
          >
            Yes
          </button>
          <button
            onClick={handleNoButtonClick}
            ref={buttonRef}
            style={{
              ...buttonStyle,
              backgroundColor: 'red',
              position: clickedNo ? 'absolute' : 'relative',
              left: xPos,
              top: yPos,
            }}
          >
            No
          </button>
        </div>
      </div>
    )
  }
}

export default App
