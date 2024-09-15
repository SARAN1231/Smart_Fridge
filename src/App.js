import Login from "./components/auth/login";
import Register from "./components/auth/register";

import Header from "./components/header";
import Home from "./components/home";
import About from "./components/home/About";

import Chart from "./components/home/Chart";
import DemoCall from "./components/home/DemoCall";
import RequestDemo from "./components/home/RequestDemo";

import { AuthProvider } from "./contexts/authContext";
import { useLocation, useRoutes } from "react-router-dom";

function App() {
  
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/about-product",
      element: <About />,
    },
    {
      path: "/request-demo",
      element: <DemoCall />,
    },
    {
      path: "/home",
      element: <Home />, 
    },
    {
      path: "/chart",
      element: <Chart />, 
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      {/* <Header /> */}
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
