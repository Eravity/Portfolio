import IdeLines from "@/app/_components/IdeLines";

const Description: React.FC = (): JSX.Element => {
  return (
    <div className="flex items-center lg:scale-[80%] xl:scale-90 2xl:scale-100 gap-6">
      <div className="float-left">
        <IdeLines />
      </div>
      <h1 className="text-white text-base lg:text-md leading-7 tracking-wide">
        <span className="font-bold text-[#F0B65A]">&lt;Hello&gt;</span> <br />
        Hey, my name is <span className="font-bold text-[#99B84A]">Cristian</span>
        &#40;&#41; &#123;
        <br /> I am a <span className="font-bold text-[#C54EE3]">front-end</span>{" "}
        developer with <br />
        <span className="font-bold text-[#E43869]">30&#43;</span> diverse{" "}
        <span className="font-bold text-[#F0B65A]">completed</span> projects.{" "}
        <br />
        I build innovative <span className="font-bold text-[#1E95E7]">dashboards</span> <br/>{" "}
        and <span className="font-bold text-[#C54EE3]">digital</span> solutions.{" "}
        <br />
        Though mostly <span className="font-bold text-[#99B84A]">front-end</span>,<br   />{" "}
        I occasionally dabble in <span className="font-bold text-[#E43869]">back-end</span>{" "}<br/>
        and even <span className="font-bold text-[#1E95E7]">full-stack</span> when needed
        <br />&#125;;
      </h1>
    </div>
  );
};

export default Description;
