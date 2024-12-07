import ShortIdeLines from "@/app/_components/ShortIdeLines";
import { TextExpander } from "@/app/_hooks/useTextExpander";
import Image from "next/image";

type Props = {
  id: number;
  name: string;
  projectName: string;
  description?: string;
  imageSrc?: string;
  href?: string;
};

const ProjectFrame: React.FC<Props> = ({
  name,
  projectName,
  description,
  id,
  imageSrc,
  href,
}) => {
  return (
    <div className="flex flex-col px-8 py-6 w-full border border-[#4D4D57] hover:border-[#80808E] duration-200 rounded-xl">
      <h1 className="text-[#F0B65A]">{name}</h1>
      <a href={href} target="_blank">
        <div className="bg-[#28282E] w-full aspect-video mt-5 rounded-xl p-6 relative">
          {imageSrc ? (
            <Image
              src={imageSrc}
              layout="fill"
              objectFit="cover"
              alt={projectName}
              className="rounded-xl grayscale hover:grayscale-0 duration-200"
            />
          ) : (
            <ShortIdeLines name={name} projectName={projectName} />
          )}
        </div>
      </a>
      <TextExpander id={id.toString()} text={description || ""} />
    </div>
  );
};

export default ProjectFrame;
