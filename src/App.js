import React, { useState } from 'react'
import './App.css'
import backgroundImage from './jotaro.png'
import valentineImage from './valentine.png'
import gun from './gun.png'

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  const [clickedNo, setClickedNo] = useState(false)
  const [xPos, setXPos] = useState(null)
  const [yPos, setYPos] = useState()

  const handleNoButtonClick = () => {
    setClickedNo(true)
    setXPos(Math.floor(Math.random() * windowWidth - 100))
    setYPos(Math.floor(Math.random() * windowHeight - 100))
    console.log(xPos, yPos)
  }

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '10%',
        width: '100vw', // 100% of the viewport width
        height: '100vh', // 100% of the viewport height
        margin: 0, // Remove default margin
        padding: 0, // Remove default padding
        boxSizing: 'border-box', // Include padding and border in element's total width and height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          backgroundImage: clickedNo ? `url(${gun})` : `url(${valentineImage})`,
          width: '380px', // Adjust the width as needed
          height: '410px', // Adjust the height as needed
          backgroundColor: 'white',
          marginBottom: '20px', // Adjust the margin as needed
        }}
      >
        {/* Content of the white rectangle goes here */}
      </div>

      <div>
        <button
          onClick={handleNoButtonClick} // Attach the click event handler
          style={{
            padding: '10px',
            paddingInline: '20px',
            fontSize: '16px',
            fontWeight: 'bold',
            margin: '20px',
            backgroundColor: 'pink',
            borderRadius: '10%',
            color: 'white', // Text color
            fontSize: '40px',
            border: 'none', // Remove default button border
          }}
        >
          Yes
        </button>
        <button
          onClick={handleNoButtonClick} // Attach the click event handler
          style={{
            padding: '10px',
            fontSize: '16px',
            fontWeight: 'bold',
            paddingInline: '20px',
            position: 'absolute',
            left: xPos,
            top: yPos,
            margin: '20px',
            backgroundColor: 'black',
            borderRadius: '10%',
            color: 'white', // Text color
            fontSize: '40px',
            border: 'none', // Remove default button border
          }}
        >
          No
        </button>
      </div>
    </div>
  )
}

export default App
