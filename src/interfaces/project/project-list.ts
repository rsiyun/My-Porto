import type { ApiResponse } from "../base-response"

export interface ProjectResponse extends ApiResponse {
    ProjectList: ProjectList[]
}
export enum Enumsource{
    Open = "Open",
    Close ="Close"
}
export interface ProjectList{
    tools: ToolFramework[];
    title: string;
    HeroImage: string;
    source: Enumsource;
    github: string;
    preview: string;
    slug: string;
    desc: string;
}
export interface Images {
    img: string;
    alt: string;
}
export interface ToolFramework extends Images{
    link: string
}
