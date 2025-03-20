import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AboutMetaGym from "./Components/AboutMetaGym/AboutMetaGym";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import OurGyms from "./Components/OurGyms/OurGyms";
import Practise from "./Components/Practise/Practise";
import Layout from "./Components/Layout/Layout";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Members from "./Components/Members/Members";

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <AboutMetaGym /> },
        { path: "ourgyms", element: <OurGyms /> },
        { path: "practise", element: <Practise /> },
        { path: "contact", element: <Contact /> },
        { path: "members", element: <Members /> },
        { path: "signup", element: <SignUp /> },
        { path: "login", element: <Login /> },
        { path: "*", element: <NotFound /> },
      ],
    }],
);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
