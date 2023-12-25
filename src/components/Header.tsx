// import {  } from '@heroicons/react/24/solid'
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const router = useRouter();
    useEffect(() => {
        if (showMenu == true) {
            setShowMenu(false);
        }
    }, [router.pathname]);
    return (
        <>
            <header className="text-white m-auto py-6 px-6">
                <nav className="flex justify-between  items-center">
                    <p className="text-xl font-mono font-bold">
                        <Link href="/">Raihan Siyun</Link>
                    </p>
                    <Bars3Icon onClick={() => setShowMenu(!showMenu)} className={`h-8 w-8 lg:hidden ${showMenu ? 'hidden' : 'block'}`} />
                    <ul className="hidden lg:block">
                        <li className="float-left p-2 pl-4">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="float-left p-2 pl-4">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="float-left p-2 pl-4">
                            <Link href="/project">Project</Link>
                        </li>
                        <li className="float-left p-2 pl-4">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className={`bg-white z-10 absolute left-0 right-0 top-0 bottom-0 ${showMenu ? 'flex' : 'hidden'}`}>
                <div className="flex-col py-7 px-6 flex w-full">
                    <button onClick={() => setShowMenu(!showMenu)} className="flex ml-auto"><XMarkIcon className="h-8 w-8"></XMarkIcon></button>
                    <div className="flex text-black flex-col items-center gap-10 font-semibold text-2xl">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        {/* <Link href="">Skills</Link> */}
                        <Link href="/project">Project</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
                {/* {showMenu ? 'isOn' : 'isDown'} */}
            </div>
        </>
    )
}