import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { SmallPaginationGroup } from '../components/grouped'
import douglas_hurley from '../assets/crew/image-douglas-hurley.webp'
import mark_shuttleworth from '../assets/crew/image-mark-shuttleworth.webp'
import victor_glover from '../assets/crew/image-victor-glover.webp'
import anousheh_ansari from '../assets/crew/image-anousheh-ansari.webp'

interface CrewMember {
    name: string
    position: string
    description: string
    src: string
}

interface CrewProps {
    className?: string
}

export default function Crew(props: CrewProps): JSX.Element {
    const [crewIndex, setCrewIndex] = useState<number>(0)
    const [xDown, setXDown] = useState<number | null>(null)
    const [yDown, setYDown] = useState<number | null>(null)
    const [xUp, setXUp] = useState<number | null>(null)
    const [yUp, setYUp] = useState<number | null>(null)

    const animateConfig = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.6, ease: 'easeInOut' }
    }

    const crews: CrewMember[] = [
        {
            name: "Douglas Hurley",
            position: "Commander",
            description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
            src: douglas_hurley
        },
        {
            name: "MARK SHUTTLEWORTH",
            position: "Mission Specialist",
            description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
            src: mark_shuttleworth
        },
        {
            name: "Victor Glover",
            position: "Pilot",
            description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
            src: victor_glover
        },
        {
            name: "Anousheh Ansari",
            position: "Flight Engineer",
            description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
            src: anousheh_ansari
        }
    ]

    const handleTouchStart = useCallback((e: TouchEvent) => {
        setXDown(e.touches[0].clientX)
        setYDown(e.touches[0].clientY)
    }, [])

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!xDown || !yDown) return
        setXUp(e.touches[0].clientX)
        setYUp(e.touches[0].clientY)
    }, [xDown, yDown])

    const handleTouchEnd = useCallback(() => {
        if (!xDown || !yDown || !xUp || !yUp) return
        const xDiff = xDown - xUp
        const yDiff = yDown - yUp

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                setCrewIndex((crewIndex + 1) % 4)
            } else {
                setCrewIndex((crewIndex - 1 + 4) % 4)
            }
        }
        setXDown(null)
        setYDown(null)
        setXUp(null)
        setYUp(null)
    }, [xDown, yDown, xUp, yUp, crewIndex])

    useEffect(() => {
        window.addEventListener('touchstart', handleTouchStart)
        window.addEventListener('touchmove', handleTouchMove)
        window.addEventListener('touchend', handleTouchEnd)
        return () => {
            window.removeEventListener('touchstart', handleTouchStart)
            window.removeEventListener('touchmove', handleTouchMove)
            window.removeEventListener('touchend', handleTouchEnd)
        }
    }, [handleTouchStart, handleTouchMove, handleTouchEnd])

    return (
        <div className={`${props.className || ''} flex grow justify-center p-6 sm:p-10 lg:py-12 w-full min-h-full`}>
            <div className="flex flex-col gap-6 w-full max-w-[1110px] min-h-full">
                <div className="flex flex-row gap-6 justify-center sm:justify-start w-full h-fit">
                    <span className="font-barlowcondensed font-bold text-[16px] sm:text-[20px] lg:text-[28px] tracking-[15%] lg:tracking-[4.72px] text-white/25">02</span>
                    <span className='txt-pre-5'>MEET YOUR CREW</span>
                </div>
                <div className='flex flex-col max-lg:items-center lg:flex-row gap-8 lg:justify-between w-full h-fit lg:h-full pt-10 lg:p-0'>
                    <div className='flex flex-col gap-6 lg:gap-10 w-full lg:min-w-[445px] max-lg:max-w-[512px] h-fit lg:h-full'>
                        <motion.div
                            id='crew-pane'
                            className='text-center lg:text-left flex flex-col gap-6 justify-center lg:justify-start w-full max-w-[640px] h-full'
                            key={crewIndex}
                            {...animateConfig}
                        >
                            <div className="flex flex-col gap-2 sm:gap-4 w-full h-fit">
                                <span className="txt-pre-4 text-white/50">{crews[crewIndex].position}</span>
                                <span className="txt-pre-3 uppercase">{crews[crewIndex].name}</span>
                            </div>
                            <p className="txt-pre-9 text-blue-300 w-full h-fit min-h-[162px] sm:min-h-[116px] lg:min-h-[auto]">{crews[crewIndex].description}</p>
                        </motion.div>
                        <div className='flex justify-center lg:justify-start lg:pb-12 w-full h-fit'>
                            <SmallPaginationGroup state={crewIndex} onClick={[() => setCrewIndex(0), () => setCrewIndex(1), () => setCrewIndex(2), () => setCrewIndex(3)]} />
                        </div>
                    </div>

                    <motion.div
                        className="flex justify-center items-start lg:items-center overflow-hidden w-full h-full"
                        key={crewIndex}
                        {...animateConfig}
                    >
                        <img className='mask-img max-h-[350px] sm:max-h-[500px] lg:max-h-[600px]' src={crews[crewIndex].src} alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}