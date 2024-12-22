import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/Routes";


function App() {
  const Routes = router;
  return <RouterProvider router={Routes}></RouterProvider>
}

export default App;
