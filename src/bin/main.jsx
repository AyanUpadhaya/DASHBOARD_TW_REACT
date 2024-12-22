import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import flagsmith from "flagsmith";
import { FlagsmithProvider } from "flagsmith/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FlagsmithProvider
      options={{
        environmentID: "QZjPLB9tcERD39PvNuAZML",
      }}
      flagsmith={flagsmith}
    >
      <App />
    </FlagsmithProvider>
  </StrictMode>
);
