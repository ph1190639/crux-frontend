import React, { useState } from 'react';
import './App.css';
import TopToBottom from './components/TopToBottom';
import LeftToRight from './components/LeftToRight';
import WidgetComponent, { WidgetComponentProps } from './components/WidgetComponent';
import WidgetHeader from './components/WidgetHeader'; // Update the import statement

const App: React.FC = () => {

  
  const jsonData = [
    { 'Product': 'Product A', 'Q1-23': 100, 'Q2-23': 150, 'Q3-23': 150, 'Q4-23': 150 },
    { 'Product': 'Product B', 'Q1-23': 120, 'Q2-23': 180, 'Q3-23': 150,'Q4-23': 150 },
    // ... more data
  ];
  
  const tableHeaders = ['Product', 'Q1-23', 'Q2-23', 'Q3-23', 'Q4-23'];
  const durations = ['7d', '14d', '30d', '...'];

  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);

  const handleAddWidget = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Your logic for adding a widget here
  };
  

  const handleClickDuration = (duration: string) => {
    setSelectedDuration(duration);
  };

  // Pass all required props to WidgetComponent
  const widgetComponentProps: WidgetComponentProps = {
    data: jsonData,
    headers: tableHeaders,
    durations: durations,
    selectedDuration: selectedDuration,
    onClickDuration: handleClickDuration, // Make sure to include onClickDuration
  };
  
  return (
    <div className="App">
      <TopToBottom />
      <div className="content-container">
        <LeftToRight onAddWidget={handleAddWidget} />

        {/* Use WidgetComponent with the provided props */}
        <WidgetComponent {...widgetComponentProps} />
      </div>
    </div>
  );
};

export default App;


