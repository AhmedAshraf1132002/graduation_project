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
import GetStarted from "./Components/GetStarted/GetStarted";
import CounterContextProvider from "./Contexts/CounterContext";
import AuthContextProvider from "./Contexts/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import ProtectAuthRoutes from "./Components/ProtectAuthRoutes/ProtectAuthRoutes";
import Chest from "./Components/Chest/Chest";
import { QueryClient , QueryClientProvider } from "@tanstack/react-query"
import Shoulder from "./Components/Shoulder/Shoulder";
import Triceps from "./Components/TrycepsMuscle/TrycepsMuscle";
import Biceps from "./Components/Biceps/Biceps";

function App() {

 const queryClient = new QueryClient;

  const router = createBrowserRouter([
    {
      // RouterProvider hwa ms2ol 3n el routing w hwa ely gwah el layout ely gwaha kol el components
      path: "/Graduation-Project",
      element: <Layout />,
      children: [
        { index: true, element: <ProtectedRoute> <Home /> </ProtectedRoute> },
        { path: "getstarted", element: <ProtectedRoute> <GetStarted /> </ProtectedRoute> },
        { path: "about", element: <ProtectedRoute> <AboutMetaGym />  </ProtectedRoute>  },
        { path: "ourgyms", element: <ProtectedRoute> <OurGyms /> </ProtectedRoute> },

        { path: "practise", element: <ProtectedRoute> <Practise /> </ProtectedRoute> , children : [
           { path: "chest", element:  <Chest/>  },
           { path: "shoulders", element:  <Shoulder/>  },
           { path: "triceps", element:  <Triceps/>  },
           { path: "biceps", element:  <Biceps/>  },
        ] 
      },
        { path: "contact", element: <ProtectedRoute> <Contact /> </ProtectedRoute> },
        { path: "members", element: <ProtectedRoute> <Members /> </ProtectedRoute>  },
        { path: "signup", element: <ProtectAuthRoutes> <SignUp /> </ProtectAuthRoutes> },
        { path: "login", element: <ProtectAuthRoutes> <Login /> </ProtectAuthRoutes> },
       
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
     <QueryClientProvider client={queryClient}>
       <AuthContextProvider>
        <CounterContextProvider>
          <RouterProvider router={router}></RouterProvider>
        </CounterContextProvider>
      </AuthContextProvider>
     </QueryClientProvider>
    </>
  );
}

export default App;
