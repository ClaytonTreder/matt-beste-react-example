import { createBrowserRouter } from "react-router-dom";
import Counter from "../app/counter";
import Fetch from "../app/fetch/Fetch";
import App from "../app/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/fetch",
    element: <Fetch />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
]);


export default router;