import Logo from './components/single-components/Logo'
import Nav from './components/single-components/Navigation'
import Tab from './components/single-components/TabsMenu'
import DisplayButton from './components/single-components/DisplayButton'
import SmallPagination from './components/single-components/SmallPagination'
import LargePagination from './components/single-components/LargePagination'

function App() {

  return (
    <>
    <div className='bg-blue-900 w-full h-full'>
      <br />
      <Nav />
      <Tab />
      <Logo />
      <DisplayButton />
      <SmallPagination />
      <LargePagination />
      <p className='txt-pre-1'>EARTH</p>
      <br />
      <p className="txt-pre-2">VENUS</p>
      <br />
      <p className="txt-pre-3">JUPITER & SATERN</p>
      <br />
      <p className="txt-pre-4">URENUS, NEPTUNE,&PLUTO</p>
      <br />
      <p className="txt-pre-5">HAUMEA, SEDNA, ERIS, & CERES</p>
      <br />
      <p className="txt-pre-6">384,400</p>
      <br />
      <p className="txt-pre-7">AVG. DISTANCE</p>
      <br />
      <p className="txt-pre-8">EUROPA</p>
      <br />
      <p className="txt-pre-9">Lorem</p>
      <br />
    </div>
    </>
  )
}

export default App
