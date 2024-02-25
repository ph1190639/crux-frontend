// WidgetComponent.tsx
import React from 'react';
import WidgetHeader, { WidgetHeaderProps } from './WidgetHeader';
import './WidgetComponent.css';

type TableRow = {
  [key: string]: string | number;
};

export interface WidgetComponentProps {
  data: TableRow[];
  headers: string[];
  durations: string[];
  selectedDuration: string | null;
  onClickDuration: (duration: string) => void;
}

const WidgetComponent: React.FC<WidgetComponentProps> = ({ data, headers, durations, selectedDuration, onClickDuration }) => {
  const numHeaders = headers.length;
  
  return (
    <div className="WidgetComponent" style={{ '--num-headers': numHeaders } as React.CSSProperties}>
      <WidgetHeader durations={durations} selectedDuration={selectedDuration} onClickDuration={onClickDuration} />

      <table>
        <thead>
          <tr>
            {headers.map((header, headerIndex) => (
              <th key={`header-${headerIndex}`}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        {data.map((rowData, rowIndex) => (
          <tr key={rowIndex}>
          {headers.map((header, headerIndex) => {
          const cellValue = rowData[header];
      
          return <td key={`${headerIndex}`}>{cellValue}</td>;
    })}
  </tr>
))}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetComponent;



