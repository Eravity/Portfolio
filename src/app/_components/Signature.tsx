"use client";
import Typewriter from "@/app/_components/Typewriter";

const Signature: React.FC = (): JSX.Element => {
  return (
    <div className="hidden md:flex flex-col-reverse lg:flex-col">
      <div>
        <h1
          className="xs:text-[40px] sm:text-[50px] md:text-[70px] lg:text-[70px] xl:text-[80px] 2xl:text-[90px] font-bold leading-none text-[#99B84A]"
          style={{
            background: "#99B84A",
            WebkitBackgroundClip: "text",
            WebkitTextStroke: "10px transparent",
            color: "#1F1F23",
          }}
        >
          &lt;CRISTIAN<br></br>CEBOTARI&gt;
        </h1>
        <h1 className="text-[10px] xs:text-[20px] sm:text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] font-bold text-[#45444B]">
          &#47;&#47;IT WILL BE
        </h1>
        <h1
          className="xl:w-[504px] text-[10px] xs:text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[70px] font-bold text-[#E43869]"
          style={{
            background: "#E43869",
            WebkitBackgroundClip: "text",
            WebkitTextStroke: "8px transparent",
            color: "#1F1F23",
          }}
        >
          <Typewriter />
        </h1>
      </div>
    </div>
  );
};

export default Signature;
