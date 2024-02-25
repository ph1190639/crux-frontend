import React from 'react';
import './WidgetHeader.css'

export interface WidgetHeaderProps {
  durations: string[];
  selectedDuration: string | null;
  onClickDuration: (duration: string) => void;
}

const WidgetHeader: React.FC<WidgetHeaderProps> = ({ durations, selectedDuration, onClickDuration }) => {
  return (
    <table>
      <thead>
        <tr>
          {durations.map((duration, index) => (
            <th
              key={index}
              className={`duration-header ${selectedDuration === duration ? 'selected' : ''}`}
              onClick={() => onClickDuration(duration)}
            >
              {duration}
            </th>
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default WidgetHeader;
