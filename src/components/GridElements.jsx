import React from 'react';
import '../styles/grid_elements.css';

class GridElements extends React.Component {
  constructor(props){
    super(props);
    this.handleCellClick = this.handleCellClick.bind(this);
  };

  handleCellClick(event){
    const targetedDiv = event.target;
    console.log(targetedDiv.id);
    targetedDiv.className = 'cell nought';
    // targetedDiv.setState({class: "cell top-row cross"});
  }

  render() {
    const gameGrid = this.props.grid;
    return (
      <div>
        <div id={gameGrid[0].id} className={gameGrid[0].class} onClick={this.handleCellClick}>1.1</div>
        <div id={gameGrid[1].id} className={gameGrid[1].class} onClick={this.handleCellClick}>1.2</div>
        <div id={gameGrid[2].id} className={gameGrid[2].class} onClick={this.handleCellClick}>1.3</div>
        <div id={gameGrid[3].id} className={gameGrid[3].class} onClick={this.handleCellClick}>2.1</div>
        <div id={gameGrid[4].id} className={gameGrid[4].class} onClick={this.handleCellClick}>2.2</div>
        <div id={gameGrid[5].id} className={gameGrid[5].class} onClick={this.handleCellClick}>2.3</div>
        <div id={gameGrid[6].id} className={gameGrid[6].class} onClick={this.handleCellClick}>3.1</div>
        <div id={gameGrid[7].id} className={gameGrid[7].class} onClick={this.handleCellClick}>3.2</div>
        <div id={gameGrid[8].id} className={gameGrid[8].class} onClick={this.handleCellClick}>3.3</div>
      </div>
    )
  }

}

export default GridElements;
