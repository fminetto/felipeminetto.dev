import { ITechnology } from "interfaces/technology";

export interface ILink {
    title: string;
    href: string;
    icon: string;
}

export interface IHomeProps {
    technologies: Array<ITechnology>;
    links: Array<ILink>;
}