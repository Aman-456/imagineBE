import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { WagmiWrapperProvider } from "./wrapper.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiWrapperProvider>
      <App />
    </WagmiWrapperProvider>
  </React.StrictMode>
);
