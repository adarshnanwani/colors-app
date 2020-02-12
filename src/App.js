import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import seedColors from "./seedColors";
import generatePalette from "./colorHelpers";

function App() {
  function findPalette(id) {
    return seedColors.find(color => color.id === id);
  }
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={routeProps => (
          <PaletteList palettes={seedColors} {...routeProps} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={routeProps => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route
        path="/palette/:paletteId/:colorId"
        render={() => <SingleColorPalette />}
      />
      {/* <div>
      <Palette palette={generatePalette(seedColors[2])}/>
    </div> */}
    </Switch>
  );
}

export default App;
