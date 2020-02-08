import React, { Component } from "react";
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
  state = {};
  render() {
    const colorBoxes = this.props.colors.map(color => {
      return <ColorBox background={color.color} name={color.name}/>;
    });
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <div className="Palette-colors">
        {/* Bunch of color boxes */}
          {colorBoxes}
        </div>
        {/* Footer eventually*/}
      </div>
    );
  }
}

export default Palette;