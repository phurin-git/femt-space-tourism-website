import {DisplayButton} from './components/single'
export default function Home() {
    return (
        <div className="px-40 py-32">
            <div className='max-w-[1110px]'>
                <div className='grid grid-cols-2'>
                    <div className="flex flex-col gap-6">
                        <p className="txt-pre-5">SO, YOU WANT TO TRAVEL TO</p>
                        <p className="txt-pre-1">SPACE</p>
                        <p className="txt-pre-9 text-blue-300">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                    <DisplayButton />
                </div>
            </div>
        </div>
    )
}