import React from "react";

const TrainCarClass = ({ headers = [] }) => {
  return (
    <header className="train-class-header">
      {headers.map((header, index) => (
        <div
          key={index}
          className="train-class-header-item"
          style={{
            textAlign: header.align,
            color: header.textColor,
            fontWeight: header.textStyle === 'medium' ? '500' : '400'
          }}
        >
          {header.label}
        </div>
      ))}
    </header>
  );
};

export default TrainCarClass;