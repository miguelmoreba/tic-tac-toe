import React from 'react';
import GridElements from './GridElements.jsx';
import '../styles/game_grid.css';

class GameGrid extends React.Component {
  render(){

    return(
      <div id="game-grid">
        grid
        <GridElements grid={this.props.grid}/>
      </div>
    )
  }
}

export default GameGrid;
