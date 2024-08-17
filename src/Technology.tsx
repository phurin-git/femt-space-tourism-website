import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { LargePaginationGroup } from './components/grouped'
import space_capsule_landscape from './assets/technology/image-space-capsule-landscape.jpg'
import space_capsule_portrait from './assets/technology/image-space-capsule-portrait.jpg'
import launch_vehicle_landscape from './assets/technology/image-launch-vehicle-landscape.jpg'
import launch_vehicle_portrait from './assets/technology/image-launch-vehicle-portrait.jpg'
import spaceport_landscape from './assets/technology/image-spaceport-landscape.jpg'
import spaceport_portrait from './assets/technology/image-spaceport-portrait.jpg'

export interface TechnologyProps {
    className?: string;
}

interface Technology {
    name: string;
    description: string;
    src: string[];
}

export default function Technology(props: TechnologyProps) {
    const [technologyIndex, setTechnologyIndex] = useState<number>(0);
    const [xDown, setXDown] = useState<number | null>(null);
    const [yDown, setYDown] = useState<number | null>(null);
    const [xUp, setXUp] = useState<number | null>(null);
    const [yUp, setYUp] = useState<number | null>(null);

    const animateConfig: {
        initial: { opacity: number };
        animate: { opacity: number };
        exit: { opacity: number };
        transition: { duration: number; ease: string };
    } = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.6, ease: 'easeInOut' },
    };

    const technologies: Technology[] = [
        {
            name: "LAUNCH VEHICLE",
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            src: [launch_vehicle_landscape, launch_vehicle_portrait],
        },
        {
            name: "SPACEPORT",
            description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            src: [spaceport_landscape, spaceport_portrait],
        },
        {
            name: "SPACE CAPSULE",
            description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            src: [space_capsule_landscape, space_capsule_portrait],
        },
    ];

    const handleTouchStart = useCallback((e: TouchEvent) => {
        setXDown(e.touches[0].clientX);
        setYDown(e.touches[0].clientY);
    }, []);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!xDown || !yDown) return;
        setXUp(e.touches[0].clientX);
        setYUp(e.touches[0].clientY);
    }, [xDown, yDown]);

    const handleTouchEnd = useCallback(() => {
        if (!xDown || !yDown || !xUp || !yUp) return;
        const xDiff = xDown - xUp;
        const yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                setTechnologyIndex((technologyIndex + 1) % 3);
            } else {
                setTechnologyIndex((technologyIndex - 1 + 3) % 3);
            }
        }
        setXDown(null);
        setYDown(null);
        setXUp(null);
        setYUp(null);
    }, [technologyIndex, xDown, yDown, xUp, yUp]);

    useEffect(() => {
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);
        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

    return (
        <div className={`${props.className || ''} flex flex-row grow justify-end overflow-hidden px-6 py-12 sm:p-10 lg:py-12 w-full min-h-full`}>
            <div className="flex flex-col grow gap-6 w-full max-w-[1275px] min-h-full">
                <div className="flex flex-row gap-6 justify-center sm:justify-start w-full h-fit">
                    <span className="font-barlowcondensed font-bold text-[16px] sm:text-[20px] lg:text-[28px] tracking-[15%] lg:tracking-[4.72px] text-white/25">03</span>
                    <span className='txt-pre-5'>SPACE LAUNCH PAD</span>
                </div>
                <div className="flex flex-row gap-8 justify-center lg:justify-between items-start lg:items-center w-full h-full">
                    <div className="flex flex-col items-center lg:flex-row gap-8 lg:gap-16 pt-16 lg:p-0 w-full sm:min-w-[635px] h-full">
                        <motion.div className="flex lg:hidden justify-center items-start w-full h-full"
                            key={technologyIndex}
                            {...animateConfig}
                        >
                            <img className="min-w-[768px]" src={technologies[technologyIndex].src[0]} alt="" />
                        </motion.div>
                        <LargePaginationGroup indexState={technologyIndex} onClick={[() => setTechnologyIndex(0), () => setTechnologyIndex(1), () => setTechnologyIndex(2)]} />
                        <div className='text-center lg:text-left mt-2 lg:m-0 w-full max-lg:max-w-[512px] h-fit'>
                            <span className='txt-pre-4 text-white/50'>THE TERMINOLOGY…</span><br />
                            <motion.div
                                key={technologyIndex}
                                {...animateConfig}
                            >
                                <span className='txt-pre-3 uppercase'>{technologies[technologyIndex].name}</span>
                                <p className='txt-pre-9'>{technologies[technologyIndex].description}</p>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div className="hidden lg:flex justify-end items-center w-full h-full min-h-[600px]"
                        key={technologyIndex}
                        {...animateConfig}
                    >
                        <img className="absolute right-0 h-[600px]" src={technologies[technologyIndex].src[1]} alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}