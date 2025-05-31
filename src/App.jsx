import "./i18n";
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
import Gastrocnemius from "./Components/Gastrocnemius/Gastrocnemius";
import Quadriceps from "./Components/Quadriceps/Quadriceps";
import Hamstrings from "./Components/Hamstrings/Hamstrings";
import Glutes from "./Components/Glutes/Glutes";
import LatissimusDorsi from "./Components/LatissimusDorsi/LatissimusDorsi";
import Trapezius from "./Components/Trapezius/Trapezius";
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import UserIdProvider from "./Contexts/UserIdContext";
import VerifyEmailOTP from "./Components/VerifyEmailOTP/VerifyEmailOTP";
import Id from "./Components/Id/Id";
import ComingSoon from "./Components/ComingSoon/ComingSoon";
import InclineDumbbellBenchPress from "./Components/InclineDumbbellBenchPress/InclineDumbbellBenchPress";



function App() {


  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
  }, [i18n.language]);


 const queryClient = new QueryClient;

  const router = createBrowserRouter([
    {
      // RouterProvider hwa ms2ol 3n el routing w hwa ely gwah el layout ely gwaha kol el components
      path: "/Graduation-Project",
      element: <Layout />,
      children: [
        { index: true, element: <ProtectedRoute> <Home /> </ProtectedRoute> },
        { path: "getstarted", element:  <GetStarted />  },
        { path: "about", element: <ProtectedRoute> <AboutMetaGym />  </ProtectedRoute>  },
        { path: "ourgyms", element: <ProtectedRoute> <OurGyms /> </ProtectedRoute> },
        { path: "practise", element: <ProtectedRoute> <Practise /> </ProtectedRoute> },
        { path: "chestexercises", element:  <ProtectedRoute> <Chest/> </ProtectedRoute> },
        { path: "incline-dumbbell-bench-press", element:  <ProtectedRoute> <InclineDumbbellBenchPress/> </ProtectedRoute> },
        // { path: "deltoidexercises", element: <ProtectedRoute> <Deltoid /> </ProtectedRoute> },
        { path: "shouldersexercises", element: <ProtectedRoute> <Shoulder/> </ProtectedRoute>   },
        { path: "tricepsexercises", element:  <ProtectedRoute> <Triceps/> </ProtectedRoute>   },
        { path: "bicepsexercises", element:  <ProtectedRoute> <Biceps/> </ProtectedRoute> },
        { path: "gastrocnemiusexercises", element:  <ProtectedRoute> <Gastrocnemius/> </ProtectedRoute>},
        { path: "quadricepsexercises", element:  <ProtectedRoute> <Quadriceps/> </ProtectedRoute>},
        { path: "hamstringsexercises", element:  <ProtectedRoute> <Hamstrings/> </ProtectedRoute>},
        { path: "glutesexercises", element:  <ProtectedRoute> <Glutes/> </ProtectedRoute>},
        { path: "latissimusdorsiexercises", element:  <ProtectedRoute> <LatissimusDorsi/> </ProtectedRoute>},
        { path: "trapeziusexercises", element:  <ProtectedRoute> <Trapezius/> </ProtectedRoute>},
        { path: "contact", element: <ProtectedRoute> <Contact /> </ProtectedRoute> },
        { path: "id", element: <ProtectedRoute> <Id/> </ProtectedRoute> },
        { path: "members", element:  <ProtectedRoute> <Members /> </ProtectedRoute>  },
        { path: "coming-soon", element:  <ProtectedRoute> <ComingSoon/> </ProtectedRoute>  },
        { path: "signup", element: <ProtectAuthRoutes> <SignUp /> </ProtectAuthRoutes> },
        { path: "login", element: <ProtectAuthRoutes> <Login /> </ProtectAuthRoutes> },
        { path: "verify-otp", element: <ProtectAuthRoutes> <VerifyEmailOTP /> </ProtectAuthRoutes> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
    
     <QueryClientProvider client={queryClient}>
       <AuthContextProvider>
        <CounterContextProvider>
          <UserIdProvider>
            <RouterProvider router={router}></RouterProvider>
          </UserIdProvider>
        </CounterContextProvider>
      </AuthContextProvider>
     </QueryClientProvider>
    </>
  );
}

export default App;
