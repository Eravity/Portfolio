import Image from "next/image";
import { images } from "@/app/images/_imageImports";

const BentoBox: React.FC = (): JSX.Element => {
  const {
    CSS,
    GitHub,
    HTML,
    Javascript,
    NextJs,
    React,
    Redux,
    Router,
    SQL,
    ssr_csr,
    Supabase,
    Tailwind,
    Typescript,
  } = images;
  return (
    // prettier-ignore
    <div
      className="grid gap-2 w-5/6 mx-auto grid-rows-6 h-[760px]"
      style={{ gridTemplateColumns: "10% 10% 20% 15% 28% 15%" }}
    >
      {/* randul 1 */}
      <div className="rounded-lg col-span-2 row-span-2 h-full">
        <div className="grid gap-2 grid-cols-2 h-full">
          <div className="bg-[#28282E] rounded-3xl shadow-md h-[120px] ">
            <Image src={HTML} alt="Html logo" className="w-20"/>
          </div>
          <div className="bg-[#28282E] rounded-3xl shadow-md h-[120px]">
            <Image src={CSS} alt="CSS logo" className="w-20"/>
          </div>
          <div className="bg-[#28282E] rounded-3xl shadow-md h-[120px] col-span-2 ">
            <Image src={Supabase} alt="Supabase logo" className="w-60"/>
          </div>
        </div>
      </div>

      <div className="bg-[#28282E] rounded-3xl shadow-md row-span-2 h-full">
        <Image src={NextJs} alt="NextJS logo" className="w-60"/>
      </div>
      <div className="bg-[#28282E] rounded-3xl shadow-md row-span-2 h-full">
        <Image src={GitHub} alt="GitHub logo" className="w-40"/>
      </div>
      <div className="bg-[#28282E] rounded-3xl shadow-md row-span-2 h-full">
        <Image src={Tailwind} alt="Tailwind logo"/>
      </div>
      <div className="bg-[#28282E] rounded-3xl shadow-md row-span-2 flex items-center justify-center h-full">
        <h1 className="text-[84px] font-bold">SPA</h1>
      </div>

      {/* randul 2 */}
      <div className="grid grid-cols-10 gap-2 col-span-full row-span-2">
        <div className="bg-[#28282E] rounded-3xl shadow-md col-span-3 h-full">
          <Image src={Javascript} alt="JavaScript logo" className="w-48"/>
        </div>
        <div className="bg-[#28282E] rounded-3xl shadow-md col-span-4 h-full">
          <Image src={React} alt="React logo" className="w-52"/>
        </div>
        <div className="grid col-span-2 gap-2">
          <div className="bg-[#28282E] rounded-3xl shadow-md">
            <Image src={Redux} alt="Redux logo"className="w-28"/>
          </div>
          <div className="bg-[#28282E] rounded-3xl shadow-md">
            <h1 className="text-[64px] font-bold">30+</h1>
          </div>
        </div>
        <div className="bg-[#28282E] rounded-3xl shadow-md col-span-1 h-full">
          <Image src={SQL} alt="SQL Logo" className="w-24"/>
        </div>
      </div>

      {/* randul 3 */}
      <div className="grid gap-2 col-span-full row-span-2" 
           style={{ gridTemplateColumns: "minmax(15%, 1fr) minmax(25%, 1fr) minmax(15%, 1fr) minmax(25%, 1fr) minmax(15%, 1fr)" }}>
        <div className="bg-[#28282E] rounded-3xl shadow-md flex justify-center items-center h-full">
          <h1 className="text-[84px] font-bold">API</h1>
        </div>
        <div className="grid col-span-1 gap-2">
          <div className="bg-[#28282E] rounded-3xl flex justify-center items-center shadow-md">
            <h1 className="text-[44px] font-bold ">PERFORMANCE</h1>
          </div>
          <div className="bg-[#28282E] rounded-3xl shadow-md">
            <Image src={Router} alt="Router Logo"/>
          </div>
        </div>
        <div className="bg-[#28282E] rounded-3xl shadow-md flex justify-center items-center h-full">
          <Image src={ssr_csr} alt="SSR_CSR Logo" className="w-40"/>
        </div>
        <div className="bg-[#28282E] rounded-3xl shadow-md h-full">
          <Image src={Typescript} alt="Typescript Logo" className="w-40"/>
        </div>
        <div className="bg-[#28282E] rounded-3xl shadow-md h-full">
          <h1 className="text-[84px] font-bold">SEO</h1>
        </div>
      </div>
    </div>
  );
};

export default BentoBox;
