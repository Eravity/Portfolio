import IdeLines from "@/app/_components/IdeLines";

const Description: React.FC = (): JSX.Element => {
  return (
    <div className="flex items-center gap-6 justify-center">
      <div className="float-left">
        <IdeLines />
      </div>
      <h1 className="text-white text-[17px] xs:text-[20px] sm:text-[20px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] leading-[1.6] xs:leading-[1.6] sm:leading-[1.6] md:leading-[1.6] lg:leading-[1.6] xl:leading-[1.6] 2xl:leading-[1.8] tracking-wide">
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