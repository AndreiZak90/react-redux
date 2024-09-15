import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "./index.css";
import reducer from "./Redux/formReduser.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={reducer}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

  // <>
  //   <App />
  // </>
);
