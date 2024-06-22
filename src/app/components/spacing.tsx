import React from 'react';

type SpacingProps = {
  size: number;
};

const Spacing: React.FC<SpacingProps> = ({ size }) => {
  const spacingStyle = {
    height: `${size * 30}px`,
  };

  return <div style={spacingStyle} />;
};

export default Spacing;
