import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
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
    const { paletteName, emoji, id } = this.props.palette;
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
      <div className="SingleColorPalette Palette">
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="go-back ColorBox">
            <Link to={`/palette/${id}`} className="back-button">
              GO BACK
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
