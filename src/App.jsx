import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Layout from "./components/Layout";
import GlobalStyle from "./styles/GlobalStyle";
import { debounce } from "lodash";
import { useCallback, useEffect } from "react";

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

function setScreenHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function App() {
  const onResize = useCallback(() => {
    debounce(setScreenHeight, 200), [];
  });
  useEffect(() => {
    setScreenHeight();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
