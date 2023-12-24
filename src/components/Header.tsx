// import {  } from '@heroicons/react/24/solid'
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <header className="text-white m-auto py-6 px-6">
                <nav className="flex justify-between  items-center">
                    <p className="text-2xl">Raihan Siyun</p>
                    <Bars3Icon onClick={() => setShowMenu(!showMenu)} className={`h-8 w-8 lg:hidden ${showMenu ? 'hidden' : 'block'}`} />
                    <ul className="hidden lg:block">
                        <li className="float-left p-2 pl-4">
                            <Link href="">Home</Link>
                        </li>
                        <li className="float-left p-2 pl-4">
                            <Link href="">About</Link>
                        </li>
                        <li className="float-left p-2 pl-4">
                            <Link href="">Skills</Link>
                        </li>
                        <li className="float-left p-2 pl-4">
                            <Link href="">Project</Link>
                        </li>
                        <li className="float-left p-2 pl-4">
                            <Link href="">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className={`bg-white z-10 absolute left-0 right-0 top-0 bottom-0 ${showMenu ? 'flex' : 'hidden'}`}>
                <div className="flex-col py-7 px-6 flex w-full">
                    <button onClick={() => setShowMenu(!showMenu)} className="flex ml-auto"><XMarkIcon className="h-8 w-8"></XMarkIcon></button>
                    <div className="flex text-black flex-col items-center gap-10 font-semibold text-2xl">
                        <Link href="">Home</Link>
                        <Link href="">About</Link>
                        <Link href="">Skills</Link>
                        <Link href="">Project</Link>
                        <Link href="">Contact</Link>
                    </div>
                </div>
                {/* {showMenu ? 'isOn' : 'isDown'} */}
            </div>
        </>
    )
}