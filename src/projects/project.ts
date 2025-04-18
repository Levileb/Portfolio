
type Project = {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
};


export const projects: Project[] = [
  {
    name: "ILLAGAW",
    description: "A Mobile Game that creates a new experience in tourism",
    image: "/projects/illagaw.png", 
    technologies: ["Flutter", "Firebase", "Dart"],
    link: "https://play.google.com/store/apps/details?id=com.illagaw",
  }
];