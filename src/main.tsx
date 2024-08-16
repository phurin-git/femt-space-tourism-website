import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import { NavigationGroup } from './components/grouped'
import Home from './home'
import Destination from './destination'
import Crew from './crew'
import Technology from './technology'
import ErrorPage from "./error-page"
import './index.css'

const App = () => {
  const pathname = useLocation().pathname.substring(1)
  const backgroundClasses: { [key: string]: string[] } = {
    home: ['bg-home-mobile', 'sm:bg-home-tablet', 'lg:bg-home-desktop'],
    destination: ['bg-destination-mobile', 'sm:bg-destination-tablet', 'lg:bg-destination-desktop'],
    crew: ['bg-crew-mobile', 'sm:bg-crew-tablet', 'lg:bg-crew-desktop'],
    technology: ['bg-technology-mobile', 'sm:bg-technology-tablet', 'lg:bg-technology-desktop']
  }

  const updateBackgroundClasses = (element: HTMLElement | null, classes: string[]) => {
    if (!element) return;
  
    // Remove all background classes
    Object.values(backgroundClasses).flat().forEach(cls => element.classList.remove(cls));
  
    // Add new background classes
    classes.forEach(cls => element.classList.add(cls));
  };

  useEffect(() => {
    const bg = document.getElementById('bg');
    const classes = backgroundClasses[pathname] || backgroundClasses['home'];
    updateBackgroundClasses(bg, classes);
  }, [pathname]);
  
  return (
    <div id='bg' className={`bg-cover bg-fixed flex flex-col grow min-h-full transition-bg duration-600 ease-in-out`}>
      <NavigationGroup />
      <Routes>
        <Route path="/" element={<Home />} errorElement={<ErrorPage />}/>
        <Route path="/home" element={<Home />} errorElement={<ErrorPage />}/>
        <Route path="/destination" element={<Destination />} errorElement={<ErrorPage />}/>
        <Route path="/crew" element={<Crew />} errorElement={<ErrorPage />}/>
        <Route path="/technology" element={<Technology />} errorElement={<ErrorPage />}/>
      </Routes>
      </div>
  )
}

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root container missing in index.html');
}

let root = (container as any)._reactRootContainer;
if (!root) {
  root = createRoot(container);
  (container as any)._reactRootContainer = root;
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);