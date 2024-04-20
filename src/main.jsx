import React from "react";
import ReactDOM from "react-dom/client";

import { WagmiWrapperProvider } from "./wrapper.jsx";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiWrapperProvider>
  
      <App/>
    </WagmiWrapperProvider>
  </React.StrictMode>
);
