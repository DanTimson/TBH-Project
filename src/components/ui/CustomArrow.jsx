// components/CustomArrow.jsx
import React from "react";

const CustomArrow = ({
  width = 300,
  height = 20,
  color = "#369672",
  strokeWidth = 2,
  className = "",
}) => {
  const arrowheadSize = strokeWidth * 4; // Dynamic arrowhead size based on stroke width

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth={arrowheadSize}
          markerHeight={arrowheadSize}
          refX={arrowheadSize / 2}
          refY={arrowheadSize / 2}
          orient="auto"
        >
          <polygon
            points={`0 0, ${arrowheadSize} ${arrowheadSize / 2}, 0 ${arrowheadSize}`}
            fill={color}
          />
        </marker>
      </defs>
      
      <path
        d={`M0,${height / 2} L${width - arrowheadSize},${height / 2}`}
        stroke={color}
        strokeWidth={strokeWidth}
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );
};

export default CustomArrow;