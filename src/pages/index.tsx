import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { project } from "~/classes/constantas/project";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { Avatar, AvatarImage } from "~/components/ui/avatar";
import { Card, HoverEffect } from "~/components/ui/card-hover-effect";
import type { ProjectList as ProjectListType } from "~/interfaces/project/project-list";
export default function Home() {
  const [projectL, setProject] = useState<ProjectListType[]>();
  const fetchProject = () => {
    const projectTemp: ProjectListType[] = project.slice(0, 4);
    setProject(projectTemp)
  }
  useEffect(() => {
    fetchProject();
  }, [])
  return (
    <main className="space-y-10">
      <section id="hero" className="flex justify-between container">
        <div className="text-left flex flex-col flex-1 text-white">
          <div className="flex">
            <p className="font-bold text-2xl inline-block md:text-5xl">Hi, I'm Raihan siyun <br />👋</p>
          </div>
          <div className="flex">
            <p className="text-base pt-2 md:text-xl inline-block max-w-[600px] capitalize">fullstack developer, software engineer, content creator</p>
          </div>
        </div>
        <div className="w-[110px]">
          <span className="relative flex shrink-0 overflow-hidden rounded-full size-28 border">
            <Image alt="raihan-siyun" className="h-full w-full aspect-square object-cover" src={"/asset/rs-croped.jpeg"} width={150} height={150}></Image>
          </span>
        </div>
      </section>
      <section id="about">
        <div>
          <h2 className="text-xl font-bold">About</h2>
        </div>
        <div>
          <p className="prose max-w-full text-pretty text-sm text-muted-foreground">
            <span className="text-white italic">fullstack developer, software engineer </span> From Indonesia and an Adventure of my own mind, I like to express my feelings through code, and a quite place would be nice to have around me.
          </p>
        </div>
      </section>
      <section id="work">
        <div>
          <h2 className="text-xl font-bold mb-2">Work Experience</h2>
        </div>
        <Accordion type="multiple" className="w-full">
          <div className="flex gap-4 w-full">
            <Avatar className="mt-4">
              <AvatarImage src={"/asset/binov.webp"} />
            </Avatar>
            <AccordionItem value="item-1" className="border-none w-full">
              <AccordionTrigger position="fullstack developer" className="hover:no-underline" date="Sep 2022 - Jan 2024">Binar Inovasi digital</AccordionTrigger>
              <AccordionContent className="prose-invert text-sm">
                As a Full Stack Developer, I was responsible for end-to-end system development, covering both frontend and backend aspects. My main responsibilities included:
                <ul className="list-disc m-2 p-2">
                  <li className="mb-2">
                    Designing and developing responsive, user-friendly website interfaces.
                  </li>
                  <li className="mb-2">
                    Building and maintaining backend systems and databases to ensure optimal application performance.
                  </li>
                  <li>
                    Developing cross-platform mobile applications using the Ionic framework for Android and iOS platforms.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </div>
          <div className="flex gap-4 w-full">
            <Avatar className="mt-4">
              <AvatarImage src={"/asset/itb.png"} />
            </Avatar>
            <AccordionItem value="item-2" className="border-none w-full">
              <AccordionTrigger position="wordpress developer - internship" className="hover:no-underline" date="Feb 2021 - Apr 2021">IT brain solution</AccordionTrigger>
              <AccordionContent>
                As a wordpress developer My main responsibilities included:
                <ul className="list-disc m-2 p-2">
                  <li className="mb-2">
                    Creating and customizing WordPress-based websites tailored to client needs.
                  </li>
                  <li className="mb-2">
                    Implementing themes and plugins to enhance site functionality and performance.
                  </li>
                  <li>
                    Ensuring SEO-friendly structures and responsive design across various devices.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </div>
        </Accordion>
      </section>
      <section id="project">
        <div className="space-y-12 w-full py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center font-sans">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-bold">
              My personal project
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my personal work</h2>
          </div>
            {projectL &&
              <HoverEffect className={"lg:grid-cols-2"} items={projectL}>
                {(item:ProjectListType, idx:number) => (
                  <Card className="-p-8" key={idx}>
                    <ProjectList item={item}></ProjectList>
                  </Card>
                )}
              </HoverEffect>
            }
        </div>
      </section>
      <section id="contact" className="pb-24">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-bold">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl capitalize"> get in touch</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"><Link href={"/contact"} className="text-white underline">want to chat?</Link> just shoot me a dm</p>
          </div>
        </div>
      </section>
    </main>
  );
}
const ProjectList = ({ item }: { item: ProjectListType }) => {
  return (
    <div className="m-[-12px] mb-4" key={item.slug}>
      <div>
        <Image alt={item.HeroImage} src={item.HeroImage} width={500} height={500} className="rounded-xl mb-4 w-full"></Image>
      </div>
      <div className="px-4">
        <h4 className="font-semibold text-xl font-mono pb-2">{item.title}</h4>
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
          {item.preview != "" && <Link href={item.preview} target="_blank" className="w-full shadow-[0_0_0_3px_#000000_inset] text-center px-6 py-2 bg-transparent border border-white text-white rounded-[12px] font-bold transform hover:-translate-y-1 transition duration-400">Preview</Link>}
          {item.github != "" && <a href={item.github} target="_blank" className="w-full shadow-[0_0_0_3px_#000000_inset] px-6 text-center py-2 bg-transparent border border-white text-white rounded-[12px] font-bold transform hover:-translate-y-1 transition duration-400">Code</a>}
        </div>
      </div>
    </div>
  );
};
