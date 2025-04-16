import illagawImg from '../projects/illagaw.png';
import { StaticImageData } from "next/image"

type Project = {
    name: string;
    description: string;
    image: StaticImageData;
    technologies: string[];
    link: string;
};

export const projects: Project[] = [
    {
        name: "Illagaw",
        description: "A Mobile Game that creates a new experience in tourism",
        image: illagawImg,
        technologies: ["Flutter", "Firebase", "Dart"],
        link: "https://play.google.com/store/apps/details?id=com.illagaw",
    },
];