import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Layout from "./components/Layout";
import GlobalStyle from "./styles/GlobalStyle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "work/detail/:id",
        element: <Detail />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
