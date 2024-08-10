import { NavigationGroup, TabsGroup, LargePaginationGroup, SmallPaginationGroup } from './components/grouped'
import Home from './Home'

function App() {
  return (
    <>
    <div className='bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop w-screen h-screen'>
      <NavigationGroup />
      <Home />
    </div>
    </>
  )
}

export default App
