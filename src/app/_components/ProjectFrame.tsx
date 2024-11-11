import ShortIdeLines from "@/app/_components/ShortIdeLines";
import { TextExpander } from "@/app/_hooks/useTextExpander";

type Props = {
  id: number;
  name: string;
  projectName: string;
  description?: string;
};

const ProjectFrame: React.FC<Props> = ({
  name,
  projectName,
  description,
  id,
}) => {
  return (
    <div className="flex flex-col px-8 py-6 w-full border border-[#4D4D57] hover:border-[#80808E] duration-200 rounded-xl">
      <h1 className="text-[#F0B65A]">{name}</h1>
      <div className="bg-[#28282E] max-h-52 w-full h-full mt-5 rounded-xl p-6">
        <ShortIdeLines name={name} projectName={projectName} />
      </div>
      <TextExpander id={id.toString()} text={description || ""} />
    </div>
  );
};

export default ProjectFrame;
