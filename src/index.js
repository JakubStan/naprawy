import { render } from "react-dom";
import App from "./App";
import React from "react";
import "./style/index.scss";
import OgImg from "./images/ogimage.png";
<meta property="og:image" content={OgImg} />;

render(
  <App />,

  document.getElementById("root")
);
