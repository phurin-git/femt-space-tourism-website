import { Logo, Navigation, Tabs, LargePagination, SmallPagination } from './single'
import hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'

function NavMenu(props: any) {
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
            {/* Mobile */}
            <div className="flex sm:hidden items-center justify-between p-6">
                <Logo />
                <button>
                    <img className='w-6 h-[21px]' src={ hamburger } alt="" />
                </button>
            </div>
            <NavMenu className="hidden"/>

            {/* Tablet */}
            <div className='hidden sm:flex  lg:hidden items-center justify-between'>
                <Logo className='flex-shrink-0 mx-10' />
                <div className='flex flex-row justify-end gap-12 bg-white/5 backdrop-blur px-10 w-full'>
                    <Navigation Id='00' name='home' href='/home'/>
                    <Navigation Id='01' name='destination' href='/destination'/>
                    <Navigation Id='02' name='crew' href='/crew'/>
                    <Navigation Id='03' name='technology' href='/technology'/>
                </div>
            </div>

            {/* Desktop */}
            <div className='hidden lg:flex items-center justify-between pt-10'>
                <div className='flex flex-row items-center w-full -mr-8 z-10'>
                    <Logo className='shrink-0 mx-16' />
                    <span className='bg-[#979797] block w-full h-px'></span>
                </div>
                <div className='flex flex-row justify-end gap-12 bg-white/5 backdrop-blur min-w-[664px] px-16 z-0'>
                    <Navigation Id='00' name='home' href='/home'/>
                    <Navigation Id='01' name='destination' href='/destination'/>
                    <Navigation Id='02' name='crew' href='/crew'/>
                    <Navigation Id='03' name='technology' href='/technology'/>
                </div>
            </div>
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