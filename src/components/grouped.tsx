import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'
import { Logo, Navigation, Tabs, LargePagination, SmallPagination } from './single'

export interface NavigationGroupProps {
    className?: string;
}

export function NavigationGroup(props: NavigationGroupProps) {
    const pathname = useLocation().pathname.substring(1)
    const [navPaneState, setNavPaneState] = useState<boolean>(false)
    const [navActiveState, setNavActiveState] = useState<[boolean, boolean, boolean, boolean]>([true, false, false, false])

    const handleNavActiveState = () => {
        if (pathname === 'home' || pathname === '')
            setNavActiveState([true, false, false, false])
        else if (pathname === 'destination')
            setNavActiveState([false, true, false, false])
        else if (pathname === 'crew')
            setNavActiveState([false, false, true, false])
        else if (pathname === 'technology')
            setNavActiveState([false, false, false, true])
    }

    useEffect(handleNavActiveState, [pathname])

    const getNavActiveState = () => {
        return navActiveState.map(value => value ? "border-white" : "border-[transparent] hover:border-white/50")
    }

    const handleNavPane = () => {
        const navPane = document.getElementById('nav-pane')
        if (navPaneState){
            navPane?.classList.add('-right-0')
            navPane?.classList.remove('-right-full')
        }
        else {
            navPane?.classList.add('-right-full')
            navPane?.classList.remove('-right-0')
        }
    }

    useEffect(handleNavPane, [navPaneState])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const navPane = document.getElementById('nav-pane');
            if (navPane && !navPane.contains(event.target as Node)) {
                setNavPaneState(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`${props.className || ''}`}>
            <div className='flex items-center justify-between p-6 sm:p-0 lg:pt-10'>
                <div className='flex items-center w-full -mr-8 z-10'>
                    <Logo className='shrink-0 sm:mx-10 lg:mx-16' />
                    <span className='bg-[#979797] hidden lg:block w-full h-px'></span>
                </div>
                <button className='sm:hidden z-10' onClick={() => setNavPaneState(true)}><img className='w-6 h-[21px]' src={ hamburger } alt="" /></button>
                <div className='hidden sm:flex flex-row justify-end gap-12 bg-white/5 backdrop-blur lg:min-w-[664px] sm:px-10 lg:px-16 lg:z-0 w-full'>
                    <Navigation Id='00' className={getNavActiveState()[0]} name='home' href='/home' onClick={() => setNavPaneState(false)}/>
                    <Navigation Id='01' className={getNavActiveState()[1]} name='destination' href='/destination' onClick={() => setNavPaneState(false)}/>
                    <Navigation Id='02' className={getNavActiveState()[2]} name='crew' href='/crew' onClick={() => setNavPaneState(false)}/>
                    <Navigation Id='03' className={getNavActiveState()[3]} name='technology' href='/technology' onClick={() => setNavPaneState(false)}/>
                </div>
            </div>
            <div id="nav-pane" className="bg-[#0B0D17]/15 backdrop-blur fixed sm:hidden top-0 z-20 h-full transition-all duration-[600ms]">
                <div className="flex flex-col items-end w-[254px] h-[812px]">
                    <button onClick={() => setNavPaneState(false)}>
                        <img className="w-6 h-[21px] mx-6 my-8 " src={ close } alt="" />
                    </button>
                    <div className='flex flex-col my-12 space-y-8'>
                        <Navigation Id='00' className={getNavActiveState()[0]} name='home' href='/home' onClick={() => setNavPaneState(false)}/>
                        <Navigation Id='01' className={getNavActiveState()[1]} name='destination' href='/destination' onClick={() => setNavPaneState(false)}/>
                        <Navigation Id='02' className={getNavActiveState()[2]} name='crew' href='/crew' onClick={() => setNavPaneState(false)}/>
                        <Navigation Id='03' className={getNavActiveState()[3]} name='technology' href='/technology' onClick={() => setNavPaneState(false)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export interface TabsGroupProps {
    className?: string;
    state: number;
    onClick: ((index: number) => void)[];
}

export function TabsGroup(props: TabsGroupProps) {
    const [state, setState] = useState<[boolean, boolean, boolean, boolean]>([true, false, false, false])

    const handleState = () => {
        if (props.state === 0)
            setState([true, false, false, false])
        else if (props.state === 1)
            setState([false, true, false, false])
        else if (props.state === 2)
            setState([false, false, true, false])
        else if (props.state === 3)
            setState([false, false, false, true])
    }
    
    useEffect(handleState, [props.state])

    const getState = () => {
        return state.map(value => value ? "text-white border-white" : "text-blue-300 hover:text-white border-[transparent] hover:border-white/50")
    }
    return (
        <div className={`${props.className || ''} flex flex-row gap-8`}>
            <Tabs name="moon" className={getState()[0]} onClick={() => props.onClick[0](0)}/>
            <Tabs name="mars" className={getState()[1]} onClick={() => props.onClick[1](1)}/>
            <Tabs name="europa" className={getState()[2]} onClick={() => props.onClick[2](2)}/>
            <Tabs name="titan" className={getState()[3]} onClick={() => props.onClick[3](3)}/>
        </div>
    )
}

export interface SmallPaginationGroupProps {
    className?: string;
    state: number;
    onClick: (() => void)[];
}

export function SmallPaginationGroup(props: SmallPaginationGroupProps) {
    const [state, setState] = useState<[boolean, boolean, boolean, boolean]>([true, false, false, false])

    const handleState = () => {
        if (props.state === 0)
            setState([true, false, false, false])
        else if (props.state === 1)
            setState([false, true, false, false])
        else if (props.state === 2)
            setState([false, false, true, false])
        else if (props.state === 3)
            setState([false, false, false, true])
    }
    
    useEffect(handleState, [props.state])

    const getState = () => {
        return state.map(value => value ? "bg-white" : "bg-white/15 lg:hover:bg-white/50")
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

export interface LargePaginationGroupProps {
    className?: string;
    indexState: number;
    onClick: (() => void)[];
}

export function LargePaginationGroup(props: LargePaginationGroupProps) {
    const [indexState, setIndexState] = useState<[boolean, boolean, boolean]>([true, false, false])

    const handleIndexState = () => {
        if (props.indexState === 0)
            setIndexState([true, false, false])
        else if (props.indexState === 1)
            setIndexState([false, true, false])
        else if (props.indexState === 2)
            setIndexState([false, false, true])
    }

    useEffect(handleIndexState, [props.indexState])

    const getState = () => {
        return indexState.map(value => value ? "text-blue-900 bg-white border-white" :"text-white bg-blue-900 border-white/25 lg:hover:border-white")
    }

    return (
        <div className={`${props.className || ''} flex flex-row lg:flex-col gap-4 lg:gap-8`}>
            <LargePagination Id="1" className={getState()[0]} onClick={props.onClick[0]}/>
            <LargePagination Id="2" className={getState()[1]} onClick={props.onClick[1]}/>
            <LargePagination Id="3" className={getState()[2]} onClick={props.onClick[2]}/>
        </div>
    )
}