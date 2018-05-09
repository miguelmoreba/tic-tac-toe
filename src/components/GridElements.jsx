import React from 'react';
import '../styles/grid_elements.css';

class GridElements extends React.Component {

  render() {
    return (
      <div>
        <div id="1.1" className="cell top-row">1.1</div>
        <div id="1.2" className="cell top-row">1.2</div>
        <div id="1.3" className="cell top-row">1.3</div>
        <div id="2.1" className="cell middle-row">2.1</div>
        <div id="2.2" className="cell middle-row cross">2.2</div>
        <div id="2.3" className="cell middle-row">2.3</div>
        <div id="3.1" className="cell bottom-row">3.1</div>
        <div id="3.2" className="cell bottom-row">3.2</div>
        <div id="3.3" className="cell bottom-row nought">3.3</div>
      </div>
    )
  }
}

export default GridElements;
