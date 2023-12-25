import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
export default function Project() {
    const [isHover, setIsHover] = useState(false);

    let holdTimer:any;
  
    const handleMouseEnter = () => {
      holdTimer = setTimeout(() => {
        setIsHover(true);
      }, 1000);
    };
  
    const handleMouseLeave = () => {
      clearTimeout(holdTimer);
      setIsHover(false);
    };
    const projectList = [
        {
            title: "News App",
            description: "Lorem iasspsum dolor, sit amet consectetur adipisicing elit. Consequuntur nulla nemo odit optio? Necessitatibus velit corrupti inventore odio ipsam corporis ?",
        },
        {
            title: "News Note",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur nulla nemo odit optio? Necessitatibus velit corrupti inventore odio ipsam corporis ?",
        },
        {
            title: "Expense Note",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur nulla nemo odit optio? Necessitatibus velit corrupti inventore odio ipsam corporis ?",
        },
    ]
    return(
        <main className="flex-grow pt-6 px-6 pb-[72px] overflow-auto">
            <div className="flex justify-between flex-col-reverse lg:flex-row ">
                <div className="flex-grow">
                    <div className="text-white">
                        <h1 className="font-bold text-3xl">Project</h1>
                        <p className="text-lg font-semibold">Personal Project, I created it based on my knowledge and experience</p>
                    </div>
                    <div className="pt-8">
                        <div className="flex items-center bg-[#384269] w-full gap-4 p-3 rounded">
                            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500"></MagnifyingGlassIcon>
                            <input type="text" className="bg-transparent text-white flex-grow focus:outline-none" placeholder="Search..."/>
                        </div>
                    </div>

                    <div className="pt-12">
                        <h2 className="font-bold text-2xl text-white">Personal Project</h2>
                        <div className="grid grid-cols-2 gap-4 pt-8 text-white">
                        {projectList.map((item, index) => (
                            <div key={index} className="border-2 border-sky-400 flex-grow p-4 rounded">
                                <h4 className="font-semibold text-xl font-mono pb-2">{item.title}</h4>
                                <p>{item.description}</p>
                                <div></div>
                            </div>
                            ))}
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="border-2 relative border-sky-400 flex-grow p-4 rounded">
                                <div className={`z-10 absolute hidden lg:block  left-0 -top-[200px] h-[200px] overflow-hidden bg-white w-full transition-all duration-200 ease-linear rounded ${!isHover ? 'invisible opacity-0' : 'opacity-100 visible'}`}>
                                    <Image alt="" src={"/asset/jala-web3.jpg"} width={400} height={200} className="h-full object-cover"></Image>
                                </div>
                                <h4 className="font-semibold text-xl font-mono pb-2">nawds</h4>
                                
                                <p>awds</p>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}