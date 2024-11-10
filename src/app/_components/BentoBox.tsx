import Image from "next/image";
import { images } from "@/app/_images/_imageImports";

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

  const container =
    "bg-[#28282E] rounded-3xl flex flex-col justify-center items-center shadow-md";
  const title = "text-[#80808E] text-sm text-center uppercase";

  return (
    <div
      className="grid gap-2 w-5/6 mx-auto grid-rows-6 h-[760px] mb-[-100px]"
      style={{ gridTemplateColumns: "10% 10% 20% 15% 28% 15%" }}
    >
      {/* randul 1 */}
      <div className="rounded-lg col-span-2 row-span-2">
        <div className="grid gap-2 grid-cols-2">
          <div className={`${container} gap-1 h-[120px]`}>
            <Image src={HTML} alt="Html logo" className="w-16 mt-1" />
            <h1 className={`${title}`}>HTML</h1>
          </div>
          <div className={`${container} gap-1 h-[120px]`}>
            <Image src={CSS} alt="Html logo" className="w-16 mt-1" />
            <h1 className={`${title}`}>CSS</h1>
          </div>
          <div className={`${container} h-[120px] col-span-2`}>
            <Image src={Supabase} alt="Supabase logo" className="w-60" />
            <h1 className={`${title}`}>Supabase</h1>
          </div>
        </div>
      </div>

      <div className={`${container} gap-3 row-span-2`}>
        <Image src={NextJs} alt="NextJS logo" className="w-44" />
        <h1 className={`${title}`}>NextJS</h1>
      </div>
      <div className={`${container} gap-3 row-span-2`}>
        <Image src={GitHub} alt="GitHub logo" className="w-40" />
        <h1 className={`${title} mt-2`}>GitHub</h1>
      </div>
      <div className={`${container} gap-3 row-span-2`}>
        <Image src={Tailwind} alt="Tailwind logo" className="w-72" />
        <h1 className={`${title}`}>Tailwind</h1>
      </div>
      <div className={`${container} row-span-2`}>
        <h1
          className="text-[84px] font-bold"
          style={{
            background: "linear-gradient(90deg, #E43869, #28282E)",
            WebkitBackgroundClip: "text",
            WebkitTextStroke: "8px transparent",
            color: "#28282E",
          }}
        >
          SPA
        </h1>
        <h1 className={`${title} w-[130px]`}>Single Page Application</h1>
      </div>

      {/* randul 2 */}
      <div className="grid grid-cols-10 gap-2 col-span-full row-span-2">
        <div className={`${container} gap-3 col-span-3`}>
          <Image src={Javascript} alt="JavaScript logo" className="w-40" />
          <h1 className={`${title}`}>JavaScript</h1>
        </div>
        <div className={`${container} col-span-4`}>
          <Image src={React} alt="React logo" className="w-48" />
          <h1 className={`${title}`}>React</h1>
        </div>
        <div className="grid col-span-2 gap-2">
          <div className={`${container}`}>
            <Image src={Redux} alt="Redux logo" className="w-24" />
            <h1 className={`${title}`}>Redux</h1>
          </div>
          <div className={`${container}`}>
            <h1
              className="text-[64px] ml-5 font-bold"
              style={{
                background: "linear-gradient(90deg, #E43869, #28282E)",
                WebkitBackgroundClip: "text",
                WebkitTextStroke: "8px transparent",
                color: "#28282E",
              }}
            >
              30+
            </h1>
            <h1 className={`${title} mt-[-10px]`}>Completed projects</h1>
          </div>
        </div>
        <div className={`${container} gap-3`}>
          <Image src={SQL} alt="SQL Logo" className="w-24" />
          <h1 className={`${title}`}>SQL</h1>
        </div>
      </div>

      {/* randul 3 */}
      <div
        className="grid gap-2 col-span-full row-span-2"
        style={{
          gridTemplateColumns:
            "minmax(15%, 1fr) minmax(25%, 1fr) minmax(15%, 1fr) minmax(25%, 1fr) minmax(15%, 1fr)",
        }}
      >
        <div className={`${container}`}>
          <h1
            className="text-[80px] font-bold"
            style={{
              background: "linear-gradient(90deg, #99B84A, #28282E)",
              WebkitBackgroundClip: "text",
              WebkitTextStroke: "8px transparent",
              color: "#28282E",
            }}
          >
            <div className="inline invisible ml-[-40px]">.</div>API
          </h1>
          <h1 className={`${title} mt-[-15px]`}>REST API</h1>
        </div>
        <div className="grid gap-2">
          <div className={`${container} gap-1`}>
            <h1
              className="text-[44px] font-bold"
              style={{
                background: "linear-gradient(90deg, #C54EE3, #28282E)",
                WebkitBackgroundClip: "text",
                WebkitTextStroke: "8px transparent",
                color: "#28282E",
              }}
            >
              PERFORMANCE
            </h1>
            <h1 className={`${title}`}>Optimization techniques</h1>
          </div>
          <div className={`${container} gap-1`}>
            <Image src={Router} alt="Router Logo" className="w-24" />
            <h1 className={`${title}`}>Router</h1>
          </div>
        </div>
        <div className={`${container} gap-3`}>
          <Image src={ssr_csr} alt="SSR_CSR Logo" className="w-36" />
          <h1 className={`${title} w-[130px]`}>
            Client & Server side rendering
          </h1>
        </div>
        <div className={`${container} gap-4`}>
          <Image src={Typescript} alt="Typescript Logo" className="w-40" />
          <h1 className={`${title}`}>Typescript</h1>
        </div>
        <div className={`${container}`}>
          <h1
            className="text-[84px] font-bold"
            style={{
              background: "linear-gradient(90deg, #99B84A, #28282E)",
              WebkitBackgroundClip: "text",
              WebkitTextStroke: "8px transparent",
              color: "#28282E",
            }}
          >
            SEO
          </h1>
          <h1 className={`${title} w-[120px] mt-[-15px]`}>
            Search engine optimizaton
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BentoBox;
