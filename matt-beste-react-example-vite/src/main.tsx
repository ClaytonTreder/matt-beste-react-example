import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import "./global.css";

import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <div>
      <RouterProvider router={Router} />
    </div>
  </StrictMode>
);
