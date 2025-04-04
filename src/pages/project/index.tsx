import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { project } from "~/classes/constantas/project";
import Rsicon from "~/components/Rsicon";
import { Card, HoverEffect } from "~/components/ui/card-hover-effect";
import type { ProjectList as ProjectListType } from "~/interfaces/project/project-list";
export default function Project() {
    const [search, setSearch] = useState<string>("");
    const [projectL, setProject] = useState<ProjectListType[]>();
    const fetchProject = () => {
        let projectTemp: ProjectListType[] = project;

        if (search) {
            projectTemp = projectTemp.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
        }
        setProject(projectTemp)
    }
    useEffect(() => {
        fetchProject();
    }, [search])
    return (
        <main className="flex-grow pb-[72px] overflow-auto">
            <div className="flex justify-between flex-col-reverse lg:flex-row ">
                <div className="flex-grow">
                    <div>
                        <h1 className="font-bold text-3xl">Project</h1>
                        <p className="text-lg font-semibold">Personal Project, I created it based on my knowledge and experience</p>
                    </div>
                    <div className="pt-8">
                        <div className="flex items-center bg-secondary w-full gap-4 p-3 rounded">
                            <Rsicon icon="fas search" classname="h-6 w-6 text-black"></Rsicon>
                            <input onChange={(e) => setSearch(e.target.value)} id="search" type="text" className="bg-transparent text-black placeholder-black flex-grow focus:outline-none" placeholder="Search..." />
                        </div>
                    </div>

                    <div className="pt-12">
                        <h2 className="font-bold text-2xl">Personal Project</h2>
                        {/* <div className="grid lg:grid-cols-2 gap-4 pt-8 text-white"> */}
                            {projectL &&
                                <HoverEffect className={"lg:grid-cols-2"} items={projectL}>
                                    {(item: ProjectListType, idx: number) => (
                                        <Card className="-p-8" key={idx}>
                                            <ProjectList item={item}></ProjectList>
                                        </Card>
                                    )}
                                </HoverEffect>}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </main>
    )
}

const ProjectList = ({ item }: { item: ProjectListType }) => {
    return (
        <div className="m-[-12px] mb-4" key={item.slug}>
            <div>
                <Image alt={item.HeroImage} src={item.HeroImage} width={500} height={500} className="rounded-xl mb-4 w-full"></Image>
            </div>
            <div className="px-4">
                <h4 className="font-semibold text-xl pb-2">{item.title}</h4>
                <p>{item.desc}</p>
                <div className="mt-6 flex-row bottom-4 flex gap-2">
                    {item.tools.map((tool, index) => (
                        <Image
                            className="rounded"
                            key={index}
                            src={tool.img}
                            alt={tool.alt}
                            width={25}
                            height={25}
                        ></Image>
                    ))}
                </div>
                <div className="flex flex-row gap-4 mt-6">
                    {item.preview != "" && <Link href={item.preview} target="_blank" className="w-full shadow-[0_0_0_3px_#000000_inset] text-center px-6 py-2 bg-transparent border border-white rounded-[12px] font-bold transform hover:-translate-y-1 transition duration-400">Preview</Link>}
                    {item.github != "" && <a href={item.github} target="_blank" className="w-full shadow-[0_0_0_3px_#000000_inset] px-6 text-center py-2 bg-transparent border border-white rounded-[12px] font-bold transform hover:-translate-y-1 transition duration-400">Code</a>}
                </div>
            </div>
        </div>
    );
};
