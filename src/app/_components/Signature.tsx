"use client"
import Typewriter from "@/app/_components/Typewriter";

const Signature: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col">
      <h1 className="text-[160px] font-bold leading-[130px] text-[#99B84A]">
        &lt;CRISTIAN<br></br>CEBOTARI&gt;
      </h1>
      <h1 className="text-[90px] font-bold text-[#45444B]">
        &#47;&#47;IT WILL BE
      </h1>
      <h1 className="text-[90px] font-bold text-[#E43869]">
        <Typewriter />
      </h1>
    </div>
  );
};

export default Signature;
