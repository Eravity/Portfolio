import useTypewriter from "@/app/hooks/useTypewriter";

// prettier-ignore
export default function TypewriterWithIndicator() {
  const { displayText } = useTypewriter(["QUICK", "BEAUTIFUL", "QUALITATIVE"], 150, 1000); 

  return (
    <div className="flex">
      <div className="text-[70px]">{displayText}</div>
      <div className={`text-[70px] animate-pulse transition duration-200 opacity-100 text-[#E43869]`}>
        |
      </div>
    </div>
  );
}
