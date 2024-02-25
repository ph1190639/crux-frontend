import React, { useState } from 'react';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import './ZoomControls.css'; // Assuming you have a CSS file for styling

const ZoomControls = () => {
  const [zoomLevel, setZoomLevel] = useState(100); // Initial zoom level is 100%

  const handleZoomIn = () => {
    if (zoomLevel < 200) {
      setZoomLevel(zoomLevel + 10); // Increase zoom level by 10%
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 10) {
      setZoomLevel(zoomLevel - 10); // Decrease zoom level by 10%
    }
  };

  return (
    <div className="zoom-controls">
      <div className="zoom-display">{zoomLevel}%</div>
      <button className='zoom__button' onClick={handleZoomIn}><ZoomInIcon /></button>
      <button className='zoom__button' onClick={handleZoomOut}><ZoomOutIcon />    </button>
      
    </div>
  );
};

export default ZoomControls;
