import { useState } from 'react'
import { motion } from 'framer-motion';
import { TabsGroup } from './components/grouped'

export default function Destination(props: any) {
    const [planetIndex, setPlanetIndex] = useState(0)
    const animateConfig = {
        initial: { opacity: 0 },
        animate: { opacity: 1},
        exit: { opacity: 0},
        transition: { duration: 0.6, ease: 'easeInOut' }
    }
    
    const planets = [
        {
            name: "moon",
            description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: "384,400 km",
            travelTime: "3 days",
            src: "/src/assets/destination/image-moon.webp"
        },
        {
            name: "mars",
            description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            distance: "225 mil. km",
            travelTime: "9 months",
            src: "/src/assets/destination/image-mars.webp"
        },
        {
            name: "europa",
            description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: "628 mil. km",
            travelTime: "3 years",
            src: "/src/assets/destination/image-europa.webp"
        },
        {
            name: "titan",
            description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance: "1.6 bil. km",
            travelTime: "7 years",
            src: "/src/assets/destination/image-titan.webp"
        }]

    return (
        <div className={`${props.className || ''} flex grow justify-center p-6 sm:p-10 lg:py-12 w-full min-h-full`}>
            <div className="flex flex-col justify-betweenw-full w-full max-w-[1110px] min-h-full">
                <p className="txt-pre-5 text-pre-6 max-sm:text-center text-white"><span className="inline-block font-barlowcondensed text-[16px] sm:text-[20px] lg:text-[28px] font-bold tracking-[15%] lg:tracking-[4.72px] text-white/25 mb-8">01</span> PICK YOUR DESTINATION</p>
                <div className="flex flex-col lg:flex-row gap-8  w-full h-full">
                    <div className="flex justify-center items-center w-full h-full">
                        <motion.div
                        key={planetIndex}
                        {...animateConfig}
                        >
                            <img className="size-[150px] sm:size-[300px] lg:size-[480px]" src={planets[planetIndex].src} alt="" />
                        </motion.div>
                    </div>
                    <div className="flex justify-center items-center sm:min-w-[445px] h-fit">
                        <div className='flex flex-col gap-10 justify-between items-center lg:items-start w-full max-w-[514px] lg:max-w-[445px] h-fit'>
                            <TabsGroup state={planetIndex} onclick={[() => {setPlanetIndex(0)}, () => {setPlanetIndex(1)}, () => {setPlanetIndex(2)}, () => {setPlanetIndex(3)}]}/>
                            <motion.p className='max-lg:text-center gap-4'
                            key={planetIndex}
                            {...animateConfig}
                            >
                                <span className='txt-pre-2 uppercase'>{planets[planetIndex].name}</span><br />
                                <span className='txt-pre-9 text-blue-300'>{planets[planetIndex].description}</span>
                            </motion.p>
                            <span className='block w-full h-px bg-white/50'></span>
                            <div className='flex flex-col sm:flex-row gap-6 justify-between items-center w-full h-fit'>
                                <p className='max-lg:text-center w-full'>
                                    <span className='txt-pre-7 uppercase text-blue-300'>AVG. DISTANCE</span><br />
                                    <motion.span className='txt-pre-6 uppercase'
                                    key={planetIndex}
                                    {...animateConfig}
                                    >
                                        {planets[planetIndex].distance}
                                    </motion.span>
                                </p>
                                <p className='max-lg:text-center w-full'>
                                    <span className='txt-pre-7 uppercase text-blue-300'>Est. travel time</span><br />
                                    <motion.span className='txt-pre-6 uppercase'
                                    key={planetIndex}
                                    {...animateConfig}
                                    >
                                        {planets[planetIndex].travelTime}
                                    </motion.span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}