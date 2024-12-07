import RadarChart from "@/app/_components/Radar";

const Section_Three: React.FC = () => {
  return (
    <section className="flex-col items-center mx-auto flex justify-center lg:flex-row lg:gap-20 2xl:gap-40 2xl:py-16 lg:py-10"
    id="section3">
      <div className="w-full lg:w-5/12">
        <RadarChart />
      </div>
      <div className="text-white my-10 text-[13px] md:mr-0 xs:text-[16px] sm:text-[16px] md:text-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] leading-[1.6] xs:leading-[1.6] sm:leading-[1.6] md:leading-[1.6] lg:leading-[1.6] xl:leading-[1.6] 2xl:leading-[1.8] tracking-wide lg:my-auto">
        <h1>I specialize in <span className="text-[#F0B65A] font-bold">UI</span> & <span className="text-[#99B84A] font-bold">Styling</span>, with<br/> strong <span className="text-[#1E95E7] font-bold">skills</span> in <span className="text-[#C54EE3] font-bold">Frameworks</span> & <span className="text-[#E43869] font-bold">Logic</span> <br/>Mostly focusing on <span className="text-[#F0B65A] font-bold">UX</span> & Optimization, <br />ensuring <span className="text-[#E43869] font-bold">smooth</span>, responsive <span className="text-[#99B84A] font-bold">experiences</span>. <br/><span className="text-[#C54EE3] font-bold">Passionate</span> about building <span className="text-[#1E95E7] font-bold">user-friendly</span><br /> web applications with <span className="text-[#F0B65A] font-bold">modern</span> <br /><span className="text-[#99B84A] font-bold">tools</span> and technologies.</h1>
      </div>
    </section>
  );
};

export default Section_Three;
