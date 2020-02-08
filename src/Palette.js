import React, { Component } from "react";
import Slider from 'rc-slider';
import ColorBox from './ColorBox';
import './Palette.css';
import 'rc-slider/assets/index.css';

class Palette extends Component {
  state = {
    level: 500
  };

  changeLevel = level => {
    this.setState({level});
  }
  render() {
    const {colors} = this.props.palette;
    const {level} = this.state;
    const colorBoxes = colors[level].map(
      color => {
        return <ColorBox background={color.hex} name={color.name} />;
      }
    );
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLevel}
        />
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
