import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { NavigationGroup } from './components/grouped'
import Home from './home'
import Destination from './destination'
import Crew from './crew'
// @ts-ignore
import Technology from './technology'
import ErrorPage from "./error-page"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div className="bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop bg-cover bg-fixed flex flex-col grow min-h-full">
      <NavigationGroup />
      <Home />
    </div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: 
    <div className="bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop bg-cover bg-fixed flex flex-col grow min-h-full">
      <NavigationGroup />
      <Home />
    </div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/destination",
    element: 
    <div className="bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop bg-cover bg-fixed flex flex-col grow min-h-full">
      <NavigationGroup />
      <Destination />
    </div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/crew",
    element: 
    <div className="bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop bg-cover bg-fixed flex flex-col grow min-h-full">
      <NavigationGroup />
      <Crew />
    </div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/technology",
    element: 
    <div className="bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop bg-cover bg-fixed flex flex-col grow min-h-full">
      <NavigationGroup />
      <Technology />
    </div>,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)