// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "../css/app.scss";

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//
import "phoenix_html";

import React from "react";
import ReactDOM from "react-dom";
import { Grid, Typography } from "@material-ui/core";

export const App: React.FC = () => {
  return (
    <Grid container justify="center">
      <Typography variant="h1">Elixir React Starter</Typography>
    </Grid>
  );
};

ReactDOM.render(<App />, document.getElementById("react-app"));
