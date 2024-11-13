"use client";
import Typewriter from "@/app/_components/Typewriter";

const Signature: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col lg:scale-[80%] xl:scale-90 2xl:scale-100">
      <h1 className="md:text-[80px] lg:text-[100px] xl:text-[120px] font-bold leading-[100px] text-[#99B84A]"
      style={{
        background: "#99B84A",
        WebkitBackgroundClip: "text",
        WebkitTextStroke: "10px transparent",
        color: "#1F1F23",
      }}>
        &lt;CRISTIAN<br></br>CEBOTARI&gt;
      </h1>
      <h1 className="text-[60px] lg:text-[70px] font-bold text-[#45444B]">
        &#47;&#47;IT WILL BE
      </h1>
      <h1 className="text-[60px] lg:text-[70px] font-bold text-[#E43869]"
      style={{
        background: "#E43869",
        WebkitBackgroundClip: "text",
        WebkitTextStroke: "8px transparent",
        color: "#1F1F23",
      }}>
        <Typewriter />
      </h1>
    </div>
  );
};

export default Signature;
