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
    "bg-[#28282E] rounded-3xl flex flex-col justify-center items-center shadow-md duration-100 hover:scale-110 hover:border border-[#4D4D57] p-2";
  const title = "text-[#80808E] text-xs xl:text-sm text-center uppercase";

  return (
    <div
  className="grid gap-1 xl:gap-2 mx-auto xl:w-11/12 xl:scale-90 2xl:scale-100 grid-rows-6 h-[760px] mb-[-100px]"
  style={{ gridTemplateColumns: "10% 10% 20% 15% 28% 15%" }}
>

      {/* Randul 1 */}
      <div className="rounded-lg col-span-2 row-span-2">
        <div className="grid gap-1 xl:gap-2 grid-cols-2">
          <div className={`${container} h-[120px]`}>
            <Image src={HTML} alt="Html logo" className="w-14 mt-1" />
            <h1 className={`${title}`}>HTML</h1>
          </div>
          <div className={`${container} h-[120px]`}>
            <Image src={CSS} alt="CSS logo" className="w-14 mt-1" />
            <h1 className={`${title}`}>CSS</h1>
          </div>
          <div className={`${container} h-[120px] col-span-2`}>
            <Image src={Supabase} alt="Supabase logo" className="w-44" />
            <h1 className={`${title}`}>Supabase</h1>
          </div>
        </div>
      </div>

      <div className={`${container} row-span-2`}>
        <Image src={NextJs} alt="NextJS logo" className="w-32 xl:w-44" />
        <h1 className={`${title} mt-3`}>NextJS</h1>
      </div>
      <div className={`${container} row-span-2`}>
        <Image src={GitHub} alt="GitHub logo" className="w-28 xl:w-36" />
        <h1 className={`${title} mt-3`}>GitHub</h1>
      </div>
      <div className={`${container} row-span-2`}>
        <Image src={Tailwind} alt="Tailwind logo" className="w-56 xl:w-72" />
        <h1 className={`${title}`}>Tailwind</h1>
      </div>
      <div className={`${container} row-span-2`}>
        <h1
          className="text-[60px] xl:text-[84px] font-bold"
          style={{
            background: "linear-gradient(90deg, #E43869, #28282E)",
            WebkitBackgroundClip: "text",
            WebkitTextStroke: "6px transparent",
            color: "#28282E",
          }}
        >
          SPA
        </h1>
        <h1 className={`${title}`}>Single Page Application</h1>
      </div>

      {/* Randul 2 */}
      <div className="grid grid-cols-10 gap-1 xl:gap-2 col-span-full row-span-2">
        <div className={`${container} col-span-3`}>
          <Image
            src={Javascript}
            alt="JavaScript logo"
            className="w-32 xl:w-40"
          />
          <h1 className={`${title} mt-3`}>JavaScript</h1>
        </div>
        <div className={`${container} col-span-4`}>
          <Image src={React} alt="React logo" className="w-36 xl:w-48" />
          <h1 className={`${title}`}>React</h1>
        </div>
        <div className="grid col-span-2 gap-1 xl:gap-2">
          <div className={`${container}`}>
            <Image src={Redux} alt="Redux logo" className="w-20 xl:w-24" />
            <h1 className={`${title}`}>Redux</h1>
          </div>
          <div className={`${container}`}>
            <h1
              className="text-[48px] xl:text-[64px] font-bold"
              style={{
                background: "linear-gradient(90deg, #E43869, #28282E)",
                WebkitBackgroundClip: "text",
                WebkitTextStroke: "6px transparent",
                color: "#28282E",
              }}
            >
              30+
            </h1>
            <h1 className={`${title} mt-[-10px]`}>Completed projects</h1>
          </div>
        </div>
        <div className={`${container}`}>
          <Image src={SQL} alt="SQL Logo" className="w-20 xl:w-24" />
          <h1 className={`${title} mt-3`}>SQL</h1>
        </div>
      </div>

      {/* Randul 3 */}
      <div
        className="grid gap-1 xl:gap-2 col-span-full row-span-2"
        style={{
          gridTemplateColumns:
            "minmax(15%, 1fr) minmax(25%, 1fr) minmax(15%, 1fr) minmax(25%, 1fr) minmax(15%, 1fr)",
        }}
      >
        <div className={`${container}`}>
          <h1
            className="text-[70px] xl:text-[80px] font-bold"
            style={{
              background: "linear-gradient(90deg, #99B84A, #28282E)",
              WebkitBackgroundClip: "text",
              WebkitTextStroke: "6px transparent",
              color: "#28282E",
            }}
          >
            <span className="invisible ml-[-40px]">.</span>API
          </h1>
          <h1 className={`${title}`}>REST API</h1>
        </div>
        <div className="grid gap-1 xl:gap-2">
          <div className={`${container}`}>
            <h1
              className="text-[36px] xl:text-[44px] font-bold"
              style={{
                background: "linear-gradient(90deg, #C54EE3, #28282E)",
                WebkitBackgroundClip: "text",
                WebkitTextStroke: "6px transparent",
                color: "#28282E",
              }}
            >
              PERFORMANCE
            </h1>
            <h1 className={`${title}`}>Optimization techniques</h1>
          </div>
          <div className={`${container}`}>
            <Image src={Router} alt="Router Logo" className="w-20 xl:w-24" />
            <h1 className={`${title}`}>Router</h1>
          </div>
        </div>
        <div className={`${container}`}>
          <Image src={ssr_csr} alt="SSR_CSR Logo" className="w-28 xl:w-36" />
          <h1 className={`${title} mt-3`}>
            Client & Server <br />
            side rendering
          </h1>
        </div>
        <div className={`${container}`}>
          <Image
            src={Typescript}
            alt="Typescript Logo"
            className="w-32 xl:w-40"
          />
          <h1 className={`${title} mt-3`}>Typescript</h1>
        </div>
        <div className={`${container}`}>
          <h1
            className="text-[70px] xl:text-[84px] font-bold"
            style={{
              background: "linear-gradient(90deg, #99B84A, #28282E)",
              WebkitBackgroundClip: "text",
              WebkitTextStroke: "6px transparent",
              color: "#28282E",
            }}
          >
            SEO
          </h1>
          <h1 className={`${title}`}>Search engine optimization</h1>
        </div>
      </div>
    </div>
  );
};

export default BentoBox;
