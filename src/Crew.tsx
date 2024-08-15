import { SmallPaginationGroup } from './components/grouped'

export default function Crew() {
    return (
        <div className="flex grow justify-center p-6 sm:p-10 lg:py-12 w-full min-h-full">
            <div className="flex flex-col gap-6 w-full max-w-[1110px] min-h-full">
                <div className="flex flex-row gap-6 justify-center sm:justify-start w-full h-fit">
                    <span className="font-barlowcondensed font-bold text-[16px] sm:text-[20px] lg:text-[28px] tracking-[15%] lg:tracking-[4.72px] text-white/25">02</span>
                    <span className='txt-pre-5'>MEET YOUR CREW</span>
                </div>
                <div className='flex flex-col max-lg:items-center lg:flex-row gap-8 lg:justify-between w-full h-fit lg:h-full pt-10 lg:p-0'>
                    <div className='flex flex-col gap-6 lg:gap-10 w-full lg:min-w-[445px] max-lg:max-w-[512px] h-fit lg:h-full'>
                        <div className='text-center flex flex-col gap-6 justify-center w-full max-w-[640px] h-full'>
                            <div className="flex flex-col gap-2 sm:gap-4 w-full h-fit">
                                <span className="txt-pre-4 text-white/50">Commander</span>
                                <span className="txt-pre-3">Douglas Hurley</span>
                            </div>
                            <p className="txt-pre-9 text-blue-300 w-full h-fit">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p><br className='sm:hidden'/><br className='lg:hidden'/>
                        </div>
                        <div className='flex justify-center lg:justify-start lg:pb-12 w-full h-fit'>
                            <SmallPaginationGroup />
                        </div>
                    </div>
                    <div className="flex justify-center items-center sm:items-start lg:items-center relative w-full h-full">
                        <img className='mask-img h-[340px] sm:h-[560px] lg:h-[676px]' src="/src/assets/crew/image-douglas-hurley.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}