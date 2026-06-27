import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home";
import { lazy, Suspense, useState } from "react";
import { HashLoader } from "react-spinners";
import Error404 from "./components/Errors/Error404";


const Layout = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(import("./Layout"));
      }, 2500),
    ),
);

function App() {
  const [nav , setNav] = useState('header')

  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <Suspense
          fallback={
            <HashLoader
              color="#9929fb"
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                translate: "-50% , -50%",
              }}
              size={"75px"}
            />
          }
        >
          <Layout nav={nav} />
        </Suspense>
      ),
      children: [{ index: true, element: <Home setNav={setNav} /> }],
      errorElement:<Error404 />
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
