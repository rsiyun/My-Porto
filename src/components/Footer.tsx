import Link from "next/link";

export default function Footer() {
    return(
        <footer className="py-4 left-0 bottom-0 fixed w-full z-30 bg-white border-t">
            <div className="flex justify-center gap-4">
                <Link href={"https://www.instagram.com/siyoonnr/"}>Instagram</Link>
                <Link href={"https://github.com/rsiyun"}>Github</Link>
            </div>
        </footer>
    )
}