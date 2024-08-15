import {LargePaginationGroup} from './components/grouped'
export default function Technology() {
    return (
        <div className="flex flex-row grow justify-end overflow-hidden px-6 py-12 sm:p-10 lg:py-12 w-full min-h-full">
            <div className="flex flex-col grow gap-6 w-full max-w-[1275px] min-h-full">
                <div className="flex flex-row gap-6 justify-center sm:justify-start w-full h-fit">
                    <span className="font-barlowcondensed font-bold text-[16px] sm:text-[20px] lg:text-[28px] tracking-[15%] lg:tracking-[4.72px] text-white/25">03</span>
                    <span className='txt-pre-5'>SPACE LAUNCH PAD</span>
                </div>
                <div className="flex flex-row gap-8 justify-center lg:justify-between items-start lg:items-center w-full h-full">
                    <div className="flex flex-col items-center lg:flex-row gap-8 lg:gap-16 pt-16 lg:p-0 w-full sm:min-w-[635px] h-full">
                        <div className="flex lg:hidden justify-center items-start w-full h-full">
                            <img className="min-w-[768px]" src="/src/assets/technology/image-launch-vehicle-landscape.jpg" alt="" />
                        </div>
                        <LargePaginationGroup />
                        <div className='text-center lg:text-left mt-2 lg:m-0 w-full max-lg:max-w-[512px] h-fit'>
                            <span className='txt-pre-4 text-white/50'>THE TERMINOLOGY…</span><br />
                            <span className='txt-pre-3'>LAUNCH VEHICLE</span>
                            <p className='txt-pre-9'>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>

                        </div>
                    </div>
                    <div className="hidden lg:flex justify-end items-center w-full h-full">
                        <img className="h-[600px]" src="/src/assets/technology/image-launch-vehicle-portrait.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}