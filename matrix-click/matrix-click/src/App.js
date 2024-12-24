import React, { useState } from 'react';
import Box from './components/box';
import './index.css';

const App = () => {
  const [boxes, setBoxes] = useState(Array(9).fill(null));  // Store the colors of the boxes
  const [clicks, setClicks] = useState([]);  // Store the indexes of the clicked boxes
  const [isAllClicked, setIsAllClicked] = useState(false);  // Track if all boxes are clicked

  const handleClick = (index) => {
    // Prevent clicking if box is already green or orange
    if (boxes[index] === 'orange' || boxes[index] === 'green') return;

    const newBoxes = [...boxes];
    newBoxes[index] = 'green'; // Mark the clicked box as green
    setBoxes(newBoxes);

    const newClicks = [...clicks, index];
    setClicks(newClicks);

    // If all 9 boxes have been clicked, start turning them orange in sequence
    if (newClicks.length === 9) {
      setIsAllClicked(true); // Set the flag to start turning boxes orange
    }
  };

  // Start turning boxes orange only after all boxes have been clicked
  if (isAllClicked) {
    clicks.forEach((i, delay) => {
      setTimeout(() => {
        const updatedBoxes = [...boxes];
        updatedBoxes[i] = 'orange'; // Change the clicked box to orange
        setBoxes(updatedBoxes);
      }, delay * 500); // Delay to turn boxes orange one by one
    });
    setIsAllClicked(false); // Reset the flag to prevent multiple sequences
  }

  return (
    <div className="matrix">
      {boxes.map((color, index) => (
        <Box key={index} color={color} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

export default App;
