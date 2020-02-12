import React, { Component } from "react";
import ColorBox from "./ColorBox";
export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.shades = this.gatherShades();
  }

  gatherShades = () => {
    const {
      palette: { colors },
      colorId
    } = this.props;
    return Object.values(colors)
      .map((color, i) => {
        return color.filter(c => c.id === colorId)[0];
      })
      .slice(1);
  };

  render() {
    const colorBoxes = this.shades.map(color => {
      return (
        <ColorBox
          key={color.name}
          name={color.name}
          background={color.hex}
          showLink={false}
        />
      );
    });
    return (
      <div className="Palette">
        <h1>Single Color Palette</h1>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
