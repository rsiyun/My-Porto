import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Rsicon from "./Rsicon";
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
            <header className="m-auto pb-6 sm:pb-12">
                <nav className="flex justify-between  items-center">
                    <p className="text-xl font-bold">
                        {/* <Link href="/">Raihan Siyun</Link> */}
                    </p>
                    <div onClick={() => setShowMenu(!showMenu)}>
                        <Rsicon icon="fas bars" classname={`h-8 w-8 lg:hidden ${showMenu ? 'hidden' : 'block'}`} />
                    </div>
                    <ul className="hidden lg:block">
                        <li className="float-left p-2 pl-4">
                            <Link href="/">Home</Link>
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
            <div className={`bg-white z-30 absolute left-0 right-0 top-0 bottom-0 ${showMenu ? 'flex' : 'hidden'}`}>
                <div className="flex-col py-7 px-6 flex w-full">
                    <button onClick={() => setShowMenu(!showMenu)} className="flex ml-auto"><Rsicon icon="fas bars" classname="h-8 w-8 text-black"></Rsicon></button>
                    <div className="flex text-black flex-col items-center gap-10 font-semibold text-2xl">
                        <Link href="/">Home</Link>
                        <Link href="/project">Project</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
                {/* {showMenu ? 'isOn' : 'isDown'} */}
            </div>
        </>
    )
}