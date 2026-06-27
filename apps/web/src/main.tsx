import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { app } from "./firebase/firebaseConfig";

console.log("Firebase App:", app.name);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
