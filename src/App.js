import './App.css'
import backgroundImage from './jotaro.png'
import valentineImage from './valentine.png'

const App = () => {
  const handleButtonClick = () => {
    // Define the functionality you want when the button is clicked
    console.log('Button clicked!')
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
          backgroundImage: `url(${valentineImage})`,
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
          onClick={handleButtonClick} // Attach the click event handler
          style={{
            padding: '10px',
            fontSize: '16px',
            margin: '20px',
            backgroundColor: 'pink',
            borderRadius: '10%',
            color: 'white', // Text color
            fontSize: '60px',
            border: 'none', // Remove default button border
          }}
        >
          Yes
        </button>
        <button
          onClick={handleButtonClick} // Attach the click event handler
          style={{
            padding: '10px',
            fontSize: '16px',
            margin: '20px',
            backgroundColor: 'black',
            borderRadius: '10%',
            color: 'white', // Text color
            fontSize: '30px',
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
