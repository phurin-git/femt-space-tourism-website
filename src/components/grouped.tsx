import { useEffect, useState } from 'react'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'
import { Logo, Navigation, Tabs, LargePagination, SmallPagination } from './single'

export function NavigationGroup(props: any) {
    const [navState, setNavState] = useState(false)

    const handleNavPane = () => {
        const navPane = document.getElementById('nav-pane')
        if (navState){
            navPane?.classList.add('translate-x-0')
            navPane?.classList.remove('translate-x-full')
        }
        else {
            navPane?.classList.add('translate-x-full')
            navPane?.classList.remove('translate-x-0')
        }
    }

    useEffect(handleNavPane, [navState])

    return (
        <div className={`${props.className || ''}`}>
            <div className='flex items-center justify-between p-6 sm:p-0 lg:pt-10'>
                <div className='flex items-center w-full -mr-8 z-10'>
                    <Logo className='shrink-0 sm:mx-10 lg:mx-16' />
                    <span className='bg-[#979797] hidden lg:block w-full h-px'></span>
                </div>
                <button className='sm:hidden z-10' onClick={() => setNavState(true)}><img className='w-6 h-[21px]' src={ hamburger } alt="" /></button>
                <div className='hidden sm:flex flex-row justify-end gap-12 bg-white/5 backdrop-blur lg:min-w-[664px] sm:px-10 lg:px-16 lg:z-0 w-full'>
                    <Navigation Id='00' name='home' href='/home'/>
                    <Navigation Id='01' name='destination' href='/destination'/>
                    <Navigation Id='02' name='crew' href='/crew'/>
                    <Navigation Id='03' name='technology' href='/technology'/>
                </div>
            </div>
            <div id="nav-pane" className="bg-[#0B0D17]/15 backdrop-blur absolute sm:hidden top-0 -right-0 z-20 h-full transition-all duration-[600ms]">
                <div className="flex flex-col items-end w-[254px] h-[812px]">
                    <button onClick={() => setNavState(false)}>
                        <img className="w-6 h-[21px] mx-6 my-8 " src={ close } alt="" />
                    </button>
                    <div className='flex flex-col my-12 space-y-8'>
                        <Navigation Id='00' name='home' href='/home'/>
                        <Navigation Id='01' name='destination' href='/destination'/>
                        <Navigation Id='02' name='crew' href='/crew'/>
                        <Navigation Id='03' name='technology' href='/technology'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function TabsGroup(props: any) {
    const [state, setState] = useState([1, 0, 0, 0])

    const handleState = () => {
        if (props.state == 0)
            setState([1, 0, 0, 0])
        else if (props.state == 1)
            setState([0, 1, 0, 0])
        else if (props.state == 2)
            setState([0, 0, 1, 0])
        else if (props.state == 3)
            setState([0, 0, 0, 1])
    }
    
    useEffect(handleState, [props.state])

    const getState = () => {
        return state.map(value => value ?"text-white border-white" :"text-blue-300 border-[transparent]")
    }

    return (
        <div className={`${props.className || ''} flex flex-row gap-8`}>
            <Tabs name="moon" className={getState()[0]} onClick={props.onclick[0]}/>
            <Tabs name="mars" className={getState()[1]} onClick={props.onclick[1]}/>
            <Tabs name="europa" className={getState()[2]} onClick={props.onclick[2]}/>
            <Tabs name="titan" className={getState()[3]} onClick={props.onclick[3]}/>
        </div>
    )
}

export function SmallPaginationGroup(props: any) {
    const [state, setState] = useState([1, 0, 0, 0])

    const handleState = () => {
        if (props.state == 0)
            setState([1, 0, 0, 0])
        else if (props.state == 1)
            setState([0, 1, 0, 0])
        else if (props.state == 2)
            setState([0, 0, 1, 0])
        else if (props.state == 3)
            setState([0, 0, 0, 1])
    }
    
    useEffect(handleState, [props.state])

    const getState = () => {
        return state.map(value => value ?"bg-white" :"bg-white/15")
    }

    return (
        <div className={`${props.className || ''} flex flex-row gap-4 lg:gap-10`}>
            <SmallPagination className={getState()[0]} onClick={props.onClick[0]}/>
            <SmallPagination className={getState()[1]} onClick={props.onClick[1]}/>
            <SmallPagination className={getState()[2]} onClick={props.onClick[2]}/>
            <SmallPagination className={getState()[3]} onClick={props.onClick[3]}/>
        </div>
    )
}

export function LargePaginationGroup(props: any) {
    const [state, setState] = useState([1, 0, 0])

    const handleState = () => {
        if (props.state == 0)
            setState([1, 0, 0])
        else if (props.state == 1)
            setState([0, 1, 0])
        else if (props.state == 2)
            setState([0, 0, 1])
    }
    
    useEffect(handleState, [props.state])

    const getState = () => {
        return state.map(value => value ?"text-blue-900 bg-white border-white" :"text-white bg-blue-900")
    }

    return (
        <div className={`${props.className || ''} flex flex-row lg:flex-col gap-4 lg:gap-8`}>
            <LargePagination Id="1" className={getState()[0]} onClick={props.onClick[0]}/>
            <LargePagination Id="2" className={getState()[1]} onClick={props.onClick[1]}/>
            <LargePagination Id="3" className={getState()[2]} onClick={props.onClick[2]}/>
        </div>
    )
}