import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import './LeftToRight.css';
import WidgetPopup from './WidgetPopup'; // Assuming you have a Popup component

interface LeftToRightProps {
  onAddWidget: (e: React.MouseEvent<HTMLButtonElement>) => void;
}


const LeftToRight: React.FC<LeftToRightProps> = ({ onAddWidget }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleAddWidget = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPopupOpen(true);
    onAddWidget(e); // Pass the event to onAddWidget
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="navbar__leftToRight">
      <div className='navLeft'>
        <HomeIcon/>
        <button>Overview</button>
        <button>Customers</button>
        <button>Products</button>
        <button >Settings</button>
        <AddIcon/>
      </div>
      <div className='navRight'>
        <button onClick={handleAddWidget}>+ Add Widget</button>
      </div>
      {isPopupOpen && <WidgetPopup onClose={closePopup} />}
    </div>
  );
}

export default LeftToRight;