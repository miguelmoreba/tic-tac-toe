import React from 'react';
import GridElements from './GridElements.jsx';

class GameGrid extends React.Component {
  render(){
    return(
      <div id="game-grid">
        grid
        <GridElements/>
      </div>
    )
  }
}

export default GameGrid;
