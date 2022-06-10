import React from "react";
import { createRoot } from "react-dom/cjs/react-dom.production.min";
import App from "./App";
import "./index.css";
const root = createRoot(document.getElementById("root"))
root.render(<App />);