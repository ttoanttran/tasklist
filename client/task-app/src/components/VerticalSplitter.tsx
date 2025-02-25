import React, { useState, useRef } from 'react';

interface SplitterProps {
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
  initialLeftWidth?: number;  // Optional initial width for the left component
}

const VerticalSplitter: React.FC<SplitterProps> = ({ leftComponent, rightComponent, initialLeftWidth = 300 }) => {
  const [leftWidth, setLeftWidth] = useState<number>(initialLeftWidth);
  const isDragging = useRef<boolean>(false);
  const startX = useRef<number>(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    e.preventDefault(); // Prevent text selection
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.current) {
      const deltaX = e.clientX - startX.current;
      const newLeftWidth = leftWidth + deltaX;
      if (newLeftWidth > 50 && newLeftWidth < window.innerWidth - 50) {
        setLeftWidth(newLeftWidth);
        startX.current = e.clientX;
      }
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Add event listeners to the window to handle dragging outside the component
  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [leftWidth]);

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
      <div style={{ width: `${leftWidth}px`, backgroundColor: '#f0f0f0', padding: '10px' }}>
        {leftComponent}
      </div>
      <div
        style={{
          cursor: 'col-resize',
          backgroundColor: '#ccc',
          width: '5px',
          height: '100%',
          userSelect: 'none',
        }}
        onMouseDown={handleMouseDown}
      />
      <div style={{ flex: 1, padding: '10px' }}>
        {rightComponent}
      </div>
    </div>
  );
};

export default VerticalSplitter;
