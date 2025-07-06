import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#3498db');

  return (
    <div className="app">
      <h1>🎨 Color Picker</h1>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <p>Selected Color: <span style={{ color }}>{color}</span></p>
      <div className="color-box" style={{ backgroundColor: color }}></div>
    </div>
  );
}

export default App;
