import { Logo, Navigation, Tabs, LargePagination, SmallPagination } from './single'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'

function NavMenuPane(props: any) {
    return (
        <div className={props.className}>
            <div className='flex flex-col items-end w-[254px] h-[812px]'>
                <button>
                    <img className="w-6 h-[21px] mx-6 my-8 " src={ close } alt="" />
                </button>
                <div className='flex flex-col my-12 space-y-8'>
                    <Navigation Id='00' name='home'/>
                    <Navigation Id='01' name='destination'/>
                    <Navigation Id='02' name='crew'/>
                    <Navigation Id='03' name='technology'/>
                </div>
            </div>
        </div>
    )
}

export function NavigationGroup() {
    return (
        <div>
            <div className='flex items-center justify-between p-6 sm:p-0 lg:pt-10'>
                <div className='flex items-center w-full -mr-8 z-10'>
                    <Logo className='shrink-0 sm:mx-10 lg:mx-16' />
                    <span className='bg-[#979797] hidden lg:block w-full h-px'></span>
                </div>
                <button className='sm:hidden'><img className='w-6 h-[21px]' src={ hamburger } alt="" /></button>
                <div className='hidden sm:flex flex-row justify-end gap-12 bg-white/5 backdrop-blur lg:min-w-[664px] sm:px-10 lg:px-16 lg:z-0 w-full'>
                    <Navigation Id='00' name='home' href='/home'/>
                    <Navigation Id='01' name='destination' href='/destination'/>
                    <Navigation Id='02' name='crew' href='/crew'/>
                    <Navigation Id='03' name='technology' href='/technology'/>
                </div>
            </div>
            <NavMenuPane className="bg-black absolute sm:hidden top-0 right-0 translate-x-full h-full hover:translate-x-0 transition-all duration-300"/>
        </div>
    )
}

export function TabsGroup() {
    return (
        <div className='flex flex-row gap-8'>
            <Tabs name="moon"/>
            <Tabs name="mars"/>
            <Tabs name="europa"/>
            <Tabs name="titan"/>
        </div>
    )
}

export function LargePaginationGroup() {
    return (
        <div className='flex flex-row lg:flex-col gap-4 lg:gap-8'>
            <LargePagination Id="1"/>
            <LargePagination Id="2"/>
            <LargePagination Id="3"/>
        </div>
    )
}

export function SmallPaginationGroup() {
    return (
        <div className='flex flex-row gap-4 lg:gap-10'>
            <SmallPagination />
            <SmallPagination />
            <SmallPagination />
            <SmallPagination />
        </div>
    )
}