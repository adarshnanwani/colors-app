import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import generatePalette from "./colorHelpers";

function App() {
  console.log();
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette list goes here.</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={() => <h1>Single Palette goes  here.</h1>}
      />
      {/* <div>
      <Palette palette={generatePalette(seedColors[2])}/>
    </div> */}
    </Switch>
  );
}

export default App;
