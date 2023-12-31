import { ApiResponse } from "../base-response"
export interface ProjectResponse extends ApiResponse {
    ProjectList: ProjectList[]
}
export interface ProjectList{
    tools: ToolFramework[];
    title: string;
    Image?: string;
    slug: string;
    desc: string;
}
export interface ToolFramework{
    img: string;
    alt: string;
}