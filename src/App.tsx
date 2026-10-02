import {RouterProvider, createBrowserRouter} from "react-router-dom";
import './App.css'
import Home from "./Pages/Home/home.tsx";
import About from "./Pages/About/about.tsx";
import Services from "./Pages/Services/services.tsx";
import Resources from "./Pages/Resources/resources.tsx";
import Contact from "./Pages/Contact/contact.tsx";
function App() {

    const router = createBrowserRouter([
        {path: "/", Component: Home},
        {path: "/about", Component: About},
        {path: "/services", Component: Services},
        {path: "/contact", Component: Contact},
        {path: "/resources", Component: Resources},
    ]);
  return (
      <RouterProvider router={router}/>
  )
}

export default App
