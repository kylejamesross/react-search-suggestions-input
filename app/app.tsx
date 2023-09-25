
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ReactSearchSuggestionsInput } from "../src/index";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ReactSearchSuggestionsInput />
  </React.StrictMode>
);
