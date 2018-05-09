import React from 'react';
import GameGrid from '../components/GameGrid.jsx';

class GameContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <div>
        <GameGrid/>
      </div>
    )
  }
}

export default GameContainer;
