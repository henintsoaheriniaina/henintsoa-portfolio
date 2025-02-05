export type Project = {
  name: string;
  description: string;
  preview_link?: string;
  github_link: string;
  stack: string[];
  image_url?: string;
};

const projects: Project[] = [
  {
    name: "Tsikonina",
    description:
      "Tsikonina est une application dédiée aux passionnés de cuisine, permettant d'explorer, partager et créer des recettes.",
    github_link: "https://github.com/henintsoaheriniaina/tsikonina",
    preview_link: "https://tsikoninamg.infinityfreeapp.com/",
    stack: ["Tailwind CSS", "Laravel"],
    image_url:
      "https://res.cloudinary.com/dcwqtktxm/image/upload/v1738740858/pexels-framed-by-rania-2454533_vxijfv.jpg",
  },
];

export default projects;
