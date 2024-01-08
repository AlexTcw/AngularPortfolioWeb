import { Tag } from "./Tag";

export interface Project{
    id: number;
    name: String;
    summary: String;
    description: String;
    projectLink: String;
    pictures: String [];
    tags: Tag[];

}