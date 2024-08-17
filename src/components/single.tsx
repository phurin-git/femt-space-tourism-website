import { Link } from 'react-router-dom'
import logo from '../assets/shared/logo.svg'
export interface LogoProps {
    className?: string;
}

export function Logo(props: LogoProps) {
    return (
        <Link to="/"><img className={`${props.className || ''} size-10 sm:size-12`} src={logo} alt="" /></Link>
    )
}

export interface NavigationProps {
    className?: string;
    href: string;
    onClick: () => void;
    Id: string;
    name: string;
}

export function Navigation(props: NavigationProps) {
    return (
        <Link className={`${props.className || ''} uppercase flex items-center gap-3 border-r-4 sm:border-r-0 sm:border-b-4 border-[transparent] hover:border-white/50 h-max sm:h-24 w-56 sm:w-max transition-all duration-300`} to={props.href} onClick={props.onClick}>
            <span className="txt-pre-8-bold">{props.Id}</span>
            <span className="txt-pre-8">{props.name}</span>
        </Link>
    )
}

export interface TabsProps {
    className?: string;
    onClick: () => void;
    name: string;
}

export function Tabs(props: TabsProps) {
    return <button className={`${props.className || ''} txt-pre-8 uppercase flex h-8 w-max border-b-4 transition-all duration-300`} onClick={props.onClick}>{props.name}</button>
}

export interface DisplayButtonProps {
    className?: string;
    href: string;
}

export function DisplayButton(props: DisplayButtonProps) {
    return (
        <Link
            className={`${props.className || ''} txt-pre-4 uppercase text-blue-900 hover:text-blue-900/50 flex justify-center items-center size-36 sm:size-[272px] rounded-full bg-white outline outline-[88px] outline-white/0 hover:outline-white/10 transition-all duration-[600ms]`}
            to={props.href}
        >
            eXPLORE
        </Link>
    );
}

export interface SmallPaginationProps {
    className?: string;
    onClick: () => void;
}

export function SmallPagination(props: SmallPaginationProps) {
    return <button className={`${props.className || ''} block size-[10px] md:size-[15px] rounded-full transition-all duration-300`} onClick={props.onClick}></button>
}

export interface LargePaginationProps {
    className?: string;
    onClick: () => void;
    Id: string;
}

export function LargePagination(props: LargePaginationProps) {
    return <button className={`${props.className || ''} txt-pre-4 flex justify-center items-center size-[56px] md:size-[80px] rounded-full border transition-all duration-300`} onClick={props.onClick}>{props.Id}</button>
}