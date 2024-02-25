import React from 'react';
import './WidgetPopup.css'; 
import DashboardIcon from '@mui/icons-material/Dashboard';
import CloseIcon from '@mui/icons-material/Close';
import ZoomControls from './ZoomControls'
import BarChartIcon from '@mui/icons-material/BarChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PieChartIcon from '@mui/icons-material/PieChart';

interface PopupProps {
  onClose: () => void;
}

const WidgetPopup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup__top">
        <div className='popup__left'>
          <DashboardIcon />
          <div className="popup__leftInfo">
            <h2>Create Widget</h2>
            <p>Manage the glossary of terms of your DAtabase.</p>
          </div>

        </div>
        <div className="popup__right">
          <CloseIcon onClick={ onClose } />
          <div className="popup__rightInfo">
            <input type='text' placeholder='Reusability Scores' />
          </div>
        </div>
        
        
      </div>

      <div className="popup__bottom">
        <div className="popup__bottomLeft">
            <p>1 x 1</p>
            <ZoomControls/>
        </div>

        <div className="popup__bottomRight">
          <h3>COMPONENTS</h3>
          <div className='dataDescription'>
            <h3>Data</h3>
            <input type='text' placeholder='Random Description'/>
          </div>
          <div className="data__graph">
            <h3>Graph</h3>
            <input type='text' placeholder='Random Description'/>
            <div className="graph__icons">
              <BarChartIcon/>
              <ShowChartIcon/>
              <PieChartIcon/>
            </div>
          </div>
          <div className="summary">
            <h3>Summary</h3>
            <input type='text' placeholder='Random Description'/>
          </div>
        </div>
      </div>

    </div>
  );
};


export default WidgetPopup;
