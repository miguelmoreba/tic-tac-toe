import React from 'react';
import GameGrid from '../components/GameGrid.jsx';

class GameContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      grid: [
        {id: 1.1, class: "cell top-row"},
        {id: 1.2, class: "cell top-row"},
        {id: 1.3, class: "cell top-row"},
        {id: 2.1, class: "cell middle-row"},
        {id: 2.2, class: "cell middle-row"},
        {id: 2.3, class: "cell middle-row"},
        {id: 3.1, class: "cell bottom-row"},
        {id: 3.2, class: "cell bottom-row"},
        {id: 3.3, class: "cell bottom-row"}
      ]
    };
  }

  render(){
    return(
      <div>
        <GameGrid grid={this.state.grid}/>
      </div>
    )
  }
}

export default GameContainer;
