import Image from "next/image";
import { useEffect, useState } from "react";
import { project } from "~/classes/constantas/project";
import Rsicon from "~/components/Rsicon";
import { ProjectList } from "~/interfaces/project/project-list";
export default function Project() {
    const [search, setSearch] = useState<string>("");
    const [projectL, setProject] = useState<ProjectList[]>();
    const fetchProject = () =>{
        let projectTemp:ProjectList[] = project;
        if (search) {
            projectTemp = projectTemp.filter(p=> p.title.toLowerCase().includes(search.toLowerCase()))
        }
        setProject(projectTemp)
    }
    useEffect(()=>{
        fetchProject();
    }, [search])
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
                            <Rsicon icon="fas search" classname="h-6 w-6 text-gray-500"></Rsicon>
                            <input onChange={(e)=>setSearch(e.target.value)} id="search" type="text" className="bg-transparent text-white flex-grow focus:outline-none" placeholder="Search..."/>
                        </div>
                    </div>

                    <div className="pt-12">
                        <h2 className="font-bold text-2xl text-white">Personal Project</h2>
                        <div className="grid lg:grid-cols-2 gap-4 pt-8 text-white">
                        {projectL?.map((item, index) => (
                            <div key={index}>
                                <ProjectList item={item}></ProjectList>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

const ProjectList = ({item}:{item: ProjectList}) =>{
    const [isHover, setIsHover] = useState(false);

    let holdTimer: NodeJS.Timeout;
  
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
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="border-2 relative border-sky-400 flex-grow p-4 rounded min-h-[180px]">
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