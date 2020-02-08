import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import generatePalette from './colorHelpers';

function App() {
  console.log();
  return (
    <div>
      <Palette palette={generatePalette(seedColors[2])}/>
    </div>
  );
}

export default App;
