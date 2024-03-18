import { WavyBackground } from "./components/wavyBackground";
import Home from "./pages/Home/Home"
import LandingPage from "./pages/LandingPage/LandingPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from "./pages/Signup/Signup";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <Home isLoggedIn={false} usename="Hajar" />
  },
  {
    path: "/signup",
    element: <Signup />
  }
]);

function App() {

  return (
    <>
      <WavyBackground />
      <RouterProvider router={router} />
    </>
  )
}

export default App
