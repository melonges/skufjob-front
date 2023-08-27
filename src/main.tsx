import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import App from "./app.tsx";
import "./styles/global.css";
import store from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </NextUIProvider>
  </React.StrictMode>
);
