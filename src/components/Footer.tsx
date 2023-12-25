import Link from "next/link";

export default function Footer() {
    return(
        <footer className="font-mono py-4 left-0 bottom-0 fixed w-full bg-[#181D31]">
            <div className="flex justify-center gap-4 text-white">
                <Link href={"https://www.instagram.com/siyoonnr/"}>Instagram</Link>
                <Link href={"https://github.com/rsiyun"}>Github</Link>
            </div>
        </footer>
    )
}