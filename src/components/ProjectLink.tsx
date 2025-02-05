import { PropsWithChildren } from "react";
type Props = { link: string; title: string } & PropsWithChildren;
const ProjectLink = ({ link, title, children }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      className="bg-neutral-300 text-neutral-800 dark:text-neutral-600 dark:bg-neutral-50  w-fit py-2 px-4 rounded-md cursor-pointer flex items-center justify-center gap-2 font-semibold"
    >
      <p className="text-sm">{title}</p>

      {children}
    </a>
  );
};
export default ProjectLink;
