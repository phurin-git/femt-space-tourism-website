import { useEffect, useCallback, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation, Outlet} from "react-router-dom"
import { NavigationGroup } from './components/grouped'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import Error from './pages/Error'
import './index.css'
import hamburger from './assets/shared/icon-hamburger.svg'
import close from './assets/shared/icon-close.svg'
import moon from './assets/destination/image-moon.webp'
import mars from './assets/destination/image-mars.webp'
import europa from './assets/destination/image-europa.webp'
import titan from './assets/destination/image-titan.webp'
import space_capsule_landscape from './assets/technology/image-space-capsule-landscape.jpg'
import space_capsule_portrait from './assets/technology/image-space-capsule-portrait.jpg'
import launch_vehicle_landscape from './assets/technology/image-launch-vehicle-landscape.jpg'
import launch_vehicle_portrait from './assets/technology/image-launch-vehicle-portrait.jpg'
import spaceport_landscape from './assets/technology/image-spaceport-landscape.jpg'
import spaceport_portrait from './assets/technology/image-spaceport-portrait.jpg'
import douglas_hurley from './assets/crew/image-douglas-hurley.webp'
import mark_shuttleworth from './assets/crew/image-mark-shuttleworth.webp'
import victor_glover from './assets/crew/image-victor-glover.webp'
import anousheh_ansari from './assets/crew/image-anousheh-ansari.webp'
import home_desktop from './assets/home/background-home-desktop.jpg'
import home_tablet from './assets/home/background-home-tablet.jpg'
import home_mobile from './assets/home/background-home-mobile.jpg'
import destination_desktop from './assets/destination/background-destination-desktop.jpg'
import destination_tablet from './assets/destination/background-destination-tablet.jpg'
import destination_mobile from './assets/destination/background-destination-mobile.jpg'
import crew_desktop from './assets/crew/background-crew-desktop.jpg'
import crew_tablet from './assets/crew/background-crew-tablet.jpg'
import crew_mobile from './assets/crew/background-crew-mobile.jpg'
import technology_desktop from './assets/technology/background-technology-desktop.jpg'
import technology_tablet from './assets/technology/background-technology-tablet.jpg'
import technology_mobile from './assets/technology/background-technology-mobile.jpg'

export const App = () => {
  const pathname = useLocation().pathname.substring(1)
  
  const backgroundClasses: { [key: string]: string[] } = useMemo(() => ({
    home: ['bg-home-mobile', 'sm:bg-home-tablet', 'lg:bg-home-desktop'],
    destination: ['bg-destination-mobile', 'sm:bg-destination-tablet', 'lg:bg-destination-desktop'],
    crew: ['bg-crew-mobile', 'sm:bg-crew-tablet', 'lg:bg-crew-desktop'],
    technology: ['bg-technology-mobile', 'sm:bg-technology-tablet', 'lg:bg-technology-desktop']
  }), [])

  const updateBackgroundClasses = useCallback((element: HTMLElement | null, classes: string[]) => {
    if (!element) return
  
    // Remove all background classes
    Object.values(backgroundClasses).flat().forEach(cls => element.classList.remove(cls))
  
    // Add new background classes
    classes.forEach(cls => element.classList.add(cls))
  }, [backgroundClasses])

  useEffect(() => {
    const bg = document.getElementById('bg')
    const classes = backgroundClasses[pathname] || backgroundClasses['home']
    updateBackgroundClasses(bg, classes)
  }, [pathname, backgroundClasses, updateBackgroundClasses])

  // Function to preload images
  const preloadImages = (imageUrls: string[]) => {
    imageUrls.forEach((url) => {
        const img = new Image()
        img.src = url
    })
  }

  // Preload images when component mounts
  useEffect(() => {
      preloadImages([hamburger, close, moon, mars, europa, titan, space_capsule_landscape, space_capsule_portrait, launch_vehicle_landscape, launch_vehicle_portrait, spaceport_landscape, spaceport_portrait, douglas_hurley, mark_shuttleworth, victor_glover, anousheh_ansari, home_desktop, home_tablet, home_mobile, destination_desktop, destination_tablet, destination_mobile, crew_desktop, crew_tablet, crew_mobile, technology_desktop, technology_tablet, technology_mobile])
  }, [])
  
  return (
      <Routes>
          <Route path='/' element={
            <div id='bg' className={`bg-cover bg-fixed flex flex-col grow min-h-full transition-bg duration-600 ease-in-out`}>
              <NavigationGroup />
              <Outlet />
            </div>
          } errorElement={<Error />}>
            <Route path='/' element={<Home />} errorElement={<Error />}/>
            <Route path='/home' element={<Home />} errorElement={<Error />}/>
            <Route path='/destination' element={<Destination />} errorElement={<Error />}/>
            <Route path='/crew' element={<Crew />} errorElement={<Error />}/>
            <Route path='/technology' element={<Technology />} errorElement={<Error />}/>
          </Route>
      </Routes>
  )
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/femt-space-tourism-website/">
    <App />
  </BrowserRouter>
)