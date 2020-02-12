import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.shades = this.gatherShades();
  }
  state = {
    format: "hex"
  };

  changeFormat = format => {
    this.setState({ format });
  };

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
    const { format } = this.state;
    const { paletteName, emoji } = this.props.palette;
    const colorBoxes = this.shades.map(color => {
      return (
        <ColorBox
          key={color.name}
          name={color.name}
          background={color[format]}
          showLink={false}
        />
      );
    });
    return (
      <div className="Palette">
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
