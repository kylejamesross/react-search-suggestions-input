
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Content } from "./content";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>
);
