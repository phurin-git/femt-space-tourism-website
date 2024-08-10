import logo from '../assets/shared/logo.svg'

export function Logo(props: any) {
    return (
        <div className={props.className}>
            <img className='size-10 sm:size-12' src={logo} alt="" />
        </div>
    
    )
}

export function Navigation(props: any) {
    return (
        <a className="uppercase flex items-center gap-3 border-r-4 sm:border-r-0 sm:border-b-4 border-[transparent] hover:border-white/50 clicked:border-white h-max sm:h-24 w-56 sm:w-max transition-all" href="">
            <span className="txt-pre-8-bold">{props.Id}</span>
            <span className="txt-pre-8">{props.name}</span>
        </a>
    )
}

export function Tabs(props: any) {
    return <a className="txt-pre-8 uppercase text-blue-300 hover:text-white flex h-8 w-max border-b-4 border-blue-900 hover:border-white/50 clicked:border-white transition-all" href="">{props.name}</a>
}

export  function DisplayButton() {
    return <a className="txt-pre-4 uppercase text-blue-900 hover:text-blue-900/50 flex justify-center items-center size-28 sm:size-72 rounded-full bg-white outline outline-[88px] outline-white/0 hover:outline-white/10 transition-all" href="">eXPLORE</a>
}

export function SmallPagination() {
    return <span className="block size-[10px] md:size-[15px] rounded-full bg-white/15 hover:bg-white/50 clicked:bg-white transition-all"></span>
}

export function LargePagination(props: any) {
    return <span className="txt-pre-4 text-white clicked:text-blue-900 flex justify-center items-center size-[56px] md:size-[80px] rounded-full bg-blue-900 clicked:bg-white border border-white/25 hover:border-white clicked:border-white transition-all">{props.Id}</span>
}