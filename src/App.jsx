import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;