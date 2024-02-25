// src/components/LeftToRightNav.tsx
import React from 'react';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ForumIcon from '@mui/icons-material/Forum';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import AssessmentIcon from '@mui/icons-material/Assessment';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import './Nav.css'
import { Avatar } from '@mui/material';
import WidgetComponent from './WidgetComponent'

const Nav: React.FC = () => {
  return (
    
    <div className='navbar'>
      
      <div className="navbar__topToBottom">
        <div className='navbar__top'>
            <img src='images/logo1.png' alt='cruxLogo'/>
            <ShowChartIcon/>
            <ForumIcon />
            <DynamicFeedIcon/>
            <AssessmentIcon/>
        </div>
        <div className='navbar__avatar'>
          <Avatar src='images/cat.jpg' />
        </div>
      
      </div>

      <div className="navbar__leftToRight">
        <div className='navLeft'>
          <HomeIcon/>
          <button>Overview</button>
          <button>Customers</button>
          <button>Products</button>
          <button>Settings</button>
          <AddIcon/>
        </div>
        <div className='navRight'>
          <button>+ Add Widget</button>

        </div>
      </div>
      
    </div>
    
  );
};

export default Nav;
