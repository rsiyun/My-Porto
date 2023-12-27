import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { map } from "@trpc/server/observable";
import Image from "next/image";
import { useState } from "react";
import { ProjectList } from "~/interfaces/project/project-list";
export default function Project() {
    const projectList: ProjectList[] = [
        {
            title: "News App",
            desc: "Make News Aplication with react-native and laravel as a backend",
            tools: [{img: "https://reactnative.dev/img/header_logo.svg", alt: "react"}]
        },
        {
            title: "Weeding Invitation",
            desc: "Slicing design with html and tailwind css",
            tools: [{img: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg", alt: "tailwind"}]
        }
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
                            <ProjectList item={item} key={index}></ProjectList>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

const ProjectList = ({item, key}:{item: ProjectList, key: number}) =>{
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
    return(
        <div key={key} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="border-2 relative border-sky-400 flex-grow p-4 rounded min-h-[180px]">
            <div className={`z-10 absolute hidden lg:block  left-0 -top-[200px] h-[200px] overflow-hidden bg-white w-full transition-all duration-200 ease-linear rounded ${!isHover ? 'invisible opacity-0' : 'opacity-100 visible'}`}>
                <Image alt="" src={"/asset/jala-web3.jpg"} width={400} height={200} className="h-full object-cover"></Image>
            </div>
            <h4 className="font-semibold text-xl font-mono pb-2">{item.title}</h4>
            <p>{item.desc}</p>
            <div className="absolute bottom-4">
                {item.tools.map((tool, index)=>(
                    <Image className="rounded" key={index} src={tool.img} alt={tool.alt} width={25} height={25}></Image>
                ))}
            </div>
        </div>
    )
}