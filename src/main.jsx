import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { WagmiWrapperProvider } from "./wrapper.jsx";
import AdminRoutes from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiWrapperProvider>
      {/* <App /> */}
      <AdminRoutes/>
    </WagmiWrapperProvider>
  </React.StrictMode>
);
