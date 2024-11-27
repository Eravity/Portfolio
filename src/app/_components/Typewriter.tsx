import useTypewriter from "@/app/_hooks/useTypewriter";

// prettier-ignore
export default function TypewriterWithIndicator() {
  const { displayText } = useTypewriter(["QUICK", "BEAUTIFUL", "QUALITATIVE"], 150, 1000); 

  return (
    <div className="flex">
      <div className="text-[10px] xs:text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px]">{displayText}</div>
      <div className={`text-[10px] xs:text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] animate-pulse transition duration-200 opacity-100 text-[#E43869]`}>
        |
      </div>
    </div>
  );
}
