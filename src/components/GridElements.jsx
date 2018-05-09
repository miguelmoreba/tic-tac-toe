import React from 'react';
import '../styles/grid_elements.css';

class GridElements extends React.Component {



  // handleCellClick(event){
  //   const targetedDiv = this.event.target.id;
  //   console.log(targetedDiv);
  //   // targetedDiv.setState({class: "cell top-row cross"});
  // }

  render() {
    const gameGrid = this.props.grid;
    return (
      <div>
        <div id={gameGrid[0].id} className={gameGrid[0].class}>1.1</div>
        <div id={gameGrid[1].id} className={gameGrid[1].class}>1.2</div>
        <div id={gameGrid[2].id} className={gameGrid[2].class}>1.3</div>
        <div id={gameGrid[3].id} className={gameGrid[3].class}>2.1</div>
        <div id={gameGrid[4].id} className={gameGrid[4].class}>2.2</div>
        <div id={gameGrid[5].id} className={gameGrid[5].class}>2.3</div>
        <div id={gameGrid[6].id} className={gameGrid[6].class}>3.1</div>
        <div id={gameGrid[7].id} className={gameGrid[7].class}>3.2</div>
        <div id={gameGrid[8].id} className={gameGrid[8].class}>3.3</div>
      </div>
    )
  }

}

export default GridElements;
