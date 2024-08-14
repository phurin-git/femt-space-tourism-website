import { TabsGroup } from './components/grouped'

export default function Destination() {
    return (
        <div className="flex grow justify-center p-6 sm:p-10 lg:py-12 w-full min-h-full">
            <div className="flex flex-col justify-betweenw-full w-full max-w-[1110px] min-h-full">
                <p className="txt-pre-5 text-pre-6 max-sm:text-center text-white"><span className="inline-block font-barlowcondensed text-[16px] sm:text-[20px] lg:text-[28px] font-bold tracking-[15%] lg:tracking-[4.72px] text-white/25 mb-8">01</span> PICK YOUR DESTINATION</p>
                <div className="flex flex-col lg:flex-row gap-8  w-full h-full">
                    <div className="flex justify-center items-center w-full h-full">
                        <img className="size-[150px] sm:size-[300px] lg:size-[480px]" src="/src/assets/destination/image-moon.webp" alt="" />
                    </div>
                    <div className="flex justify-center items-center sm:min-w-[445px] h-fit">
                        <div className='flex flex-col gap-10 justify-between items-center lg:items-start w-full max-w-[514px] lg:max-w-[445px] h-fit'>
                            <TabsGroup />
                            <p className='max-lg:text-center gap-4'>
                                <span className='txt-pre-2'>MOON</span><br />
                                <span className='txt-pre-9 text-blue-300'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</span>
                            </p>
                            <span className='block w-full h-px bg-white/50'></span>
                            <div className='flex flex-col sm:flex-row gap-6 justify-between items-center w-full h-fit'>
                                <p className='max-lg:text-center w-full'>
                                    <span className='txt-pre-7 uppercase text-blue-300'>AVG. DISTANCE</span><br />
                                    <span className='txt-pre-6 uppercase'>384,400 km</span>
                                </p>
                                <p className='max-lg:text-center w-full'>
                                    <span className='txt-pre-7 uppercase text-blue-300'>Est. travel time</span><br />
                                    <span className='txt-pre-6 uppercase'>3 days</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}