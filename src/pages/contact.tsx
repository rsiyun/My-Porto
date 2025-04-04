import Link from "next/link";
import { useState } from "react";
// import { setTimeout } from "timers/promises";
import Rsicon from "~/components/Rsicon";
// import {CopyToClipboard} from 'react-copy-to-clipboard';
// import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Contact() {
    const [copy, setCopy] = useState<boolean>(false)
    const copyText =  async (entryText:string)=>{
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
          }, 1500);
          try {
            await navigator.clipboard.writeText(entryText);
          } catch (error) {
            console.error('Failed to copy text: ', error);
          }
      }
    return(
        <main className="flex-grow pb-[72px] overflow-auto">
        <div className="flex justify-between flex-col-reverse lg:flex-row ">
            <div className="flex-grow">
                <div>
                    <h1 className="font-bold text-3xl">Contact</h1>
                    <p className="text-lg font-semibold">Interested working with me?</p>
                </div>
                <div className="">
                        <h2 className="font-bold text-2xl"></h2>
                        <div className="grid lg:grid-cols-2 gap-4 pt-8">
                            <div className="border-2 relative border-[#384269] flex-grow p-4 rounded min-h-[140px]">
                                <div className="flex gap-2 items-center pb-2">
                                    <Rsicon icon="fas envelope" classname="h-6 w-6"></Rsicon>
                                    <h4 className="font-semibold text-2xl">Email</h4>
                                </div>
                                <p className="pb-2 text-lg">rsiyun@gmail.com</p>
                                <button onClick={()=>copyText("rsiyun@gmail.com")} className="hover:bg-[#384269] border-2 border-[#384269] hover:text-white py-2 px-4 rounded flex items-center">{copy? "Copied" : "Copy"} &nbsp;&nbsp; <Rsicon classname="h-3 w-3" icon="far clone"></Rsicon></button>
                            </div>
                            <div className="border-2 relative border-[#384269] flex-grow p-4 rounded min-h-[140px]">
                                <div className="flex gap-2 items-center pb-2">
                                    <Rsicon icon="fab whatsapp" classname="h-6 w-6"></Rsicon>
                                    <h4 className="font-semibold text-2xl">Whatsapp</h4>
                                </div>
                                <div className="flex flex-col w-full">
                                    <p className="pb-2 text-lg">rasi whatsapp</p>
                                    <div>
                                        <Link href={"http://wa.me/6281326555174"} className="bg-[#384269] py-2 px-4 text-white rounded inline-block font-bold">Visit &nbsp;&nbsp;<Rsicon classname="h-3 w-3" icon="fas long-arrow-alt-right"></Rsicon></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="border-2 relative border-[#384269] flex-grow p-4 rounded min-h-[140px]">
                                <div className="flex gap-2 items-center pb-2">
                                <Rsicon icon="fab linkedin" classname="h-6 w-6"></Rsicon>
                                    <h4 className="font-semibold text-2xl">Linkedin</h4>
                                </div>
                                <p className="pb-2 text-lg">Raihan Siyun</p>
                                <Link href={"https://www.linkedin.com/in/raihan-siyun-3b74a4251/"} className="bg-[#384269] py-2 px-4 text-white rounded inline-block font-bold">Visit &nbsp;&nbsp;<Rsicon classname="h-3 w-3" icon="fas long-arrow-alt-right"></Rsicon></Link>
                            </div>
                            <div className="border-2 relative border-[#384269] flex-grow p-4 rounded min-h-[140px]">
                                <div className="flex gap-2 items-center pb-2">
                                    <Rsicon icon="fab github" classname="h-6 w-6"></Rsicon>
                                    <h4 className="font-semibold text-2xl">Github</h4>
                                </div>
                                <p className="pb-2 text-lg">Raihan Siyun</p>
                                <Link href={"https://github.com/rsiyun"} className="bg-[#384269] py-2 px-4 rounded text-white inline-block font-bold">Visit &nbsp;&nbsp;<Rsicon classname="h-3 w-3" icon="fas long-arrow-alt-right"></Rsicon></Link>
                            </div>
                            <div className="border-2 relative border-[#384269] flex-grow p-4 rounded min-h-[140px]">
                                <div className="flex gap-2 items-center pb-2">
                                    <Rsicon icon="fab instagram" classname="h-6 w-6"></Rsicon>
                                    <h4 className="font-semibold text-2xl">Instagram</h4>
                                </div>
                                <p className="pb-2 text-lg">rasi.invite</p>
                                <Link href={"https://www.instagram.com/rasi.invite/"} className="bg-[#384269] py-2 px-4 text-white rounded inline-block font-bold">Visit &nbsp;&nbsp;<Rsicon classname="h-3 w-3" icon="fas long-arrow-alt-right"></Rsicon></Link>
                            </div>
                            <div className="border-2 relative border-[#384269] flex-grow p-4 rounded min-h-[140px]">
                                <div className="flex gap-2 items-center pb-2">
                                    <Rsicon icon="fab tiktok" classname="h-6 w-6"></Rsicon>
                                    <h4 className="font-semibold text-2xl">Tiktok</h4>
                                </div>
                                <p className="pb-2 text-lg">@rasiproduction</p>
                                <Link href={"https://www.tiktok.com/@rasiproduction"} className="bg-[#384269] py-2 px-4 rounded text-white inline-block font-bold">Visit &nbsp;&nbsp;<Rsicon classname="h-3 w-3" icon="fas long-arrow-alt-right"></Rsicon></Link>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </main>
    )
}