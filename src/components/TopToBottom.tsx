import React from 'react'
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ForumIcon from '@mui/icons-material/Forum';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Avatar } from '@mui/material';
import './TopToBottom.css'


const TopToBottom: React.FC = () => {
  return (
    
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
    
  )
}

export default TopToBottom;