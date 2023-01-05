import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routers/route";
const router = createBrowserRouter(ROUTES);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
