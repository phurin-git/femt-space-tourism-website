import {DisplayButton} from '../components/single'

export default function Home() {
    return (
        <div className='flex grow justify-center p-6 sm:px-10 lg:px-0 sm:py-32 min-w-full min-h-full'>
            <div className='flex items-start lg:items-end w-full max-w-[1110px] min-h-full'>
                <div className='flex flex-col lg:flex-row grow items-center h-full  lg:h-fit'>
                    <div className='text-center lg:text-left flex flex-col justify-between max-w-[540px] h-fit'>
                        <p>
                            <span className='txt-pre-5 txt-pre-6'>SO, YOU WANT TO TRAVEL TO</span><br />
                            <span className='txt-pre-1'>SPACE</span><br />
                            <span className='txt-pre-9 text-blue-300'>Let’s face it; if you want to go to space, you might<br className='sm:hidden'/> as well genuinely go to<br className='max-sm:hidden lg:hidden'/> outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</span>
                        </p>
                    </div>
                    <div className='flex justify-center items-center sm:items-end lg:justify-end w-full h-full'>
                        <DisplayButton href='/destination'/>
                    </div>
                </div>
            </div>
        </div>
    )
}