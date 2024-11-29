import Image from "next/image";
import { images } from "@/app/_images/_imageImports";

const BentoBoxV2: React.FC = () => {
  const {
    CSS,
    GitHub,
    HTML,
    Javascript,
    NextJs,
    React: ReactLogo,
    Redux,
    Router,
    SQL,
    ssr_csr,
    Supabase,
    Tailwind,
    Typescript,
  } = images;

  const container =
    "bg-[#28282E] rounded-xl flex flex-col justify-center items-center shadow-md transition duration-100 hover:scale-110 hover:border border-[#4D4D57] p-2";
  const title = "text-[#80808E] text-xs xl:text-sm text-center uppercase";

  return (
    <div className="grid grid-cols-3 max-w-[320px] xs:grid-cols-4 gap-2 md:hidden mx-auto">
      <div className={container}>
        <Image src={HTML} alt="HTML Logo" width={56} height={56} />
        <h1 className={title}>HTML</h1>
      </div>
      <div className={container}>
        <Image src={CSS} alt="CSS Logo" width={56} height={56} />
        <h1 className={title}>CSS</h1>
      </div>
      <div className={container}>
        <Image src={Supabase} alt="JavaScript Logo" width={56} height={56} />
        <h1 className={title}>Supabase</h1>
      </div>
      <div className={container}>
        <Image src={NextJs} alt="React Logo" width={56} height={56} />
        <h1 className={title}>NextJS</h1>
      </div>
      <div className={container}>
        <Image src={GitHub} alt="Redux Logo" width={56} height={56} />
        <h1 className={title}>Github</h1>
      </div>
      <div className={container}>
        <Image src={Tailwind} alt="Next.js Logo" width={56} height={56} />
        <h1 className={title}>Tailwind</h1>
      </div>
      <div className={container}>
        <h1
          className="text-[40px] xl:text-[84px] font-bold bg-gradient-to-r from-[#E43869] to-[#28282E] bg-clip-text text-transparent"
          style={{
            background: "linear-gradient(90deg, #E43869, #28282E)",
            WebkitBackgroundClip: "text",
            WebkitTextStroke: "6px transparent",
            color: "#28282E",
          }}
        >
          SPA
        </h1>
        <h1 className="text-[#80808E] text-[10px] xl:text-sm text-center uppercase">Single Page Application</h1>
      </div>
      <div className={container}>
        <Image src={Javascript} alt="GitHub Logo" width={56} height={56} />
        <h1 className={title}>Javascript</h1>
      </div>
      <div className={container}>
        <Image src={ReactLogo} alt="HTML Logo" width={56} height={56} />
        <h1 className={title}>React</h1>
      </div>
      <div className={container}>
        <Image src={Redux} alt="CSS Logo" width={56} height={56} />
        <h1 className={title}>Redux</h1>
      </div>
      <div className={container}>
        <h1
          className="text-[40px] xl:text-[84px] font-bold bg-gradient-to-r from-[#E43869] to-[#28282E] bg-clip-text text-transparent"
          style={{
            background: "linear-gradient(90deg, #E43869, #28282E)",
            WebkitBackgroundClip: "text",
            WebkitTextStroke: "6px transparent",
            color: "#28282E",
          }}
        >
          30+
        </h1>
        <h1 className={`${title}`}>Completed projects</h1>
      </div>
      <div className={container}>
        <h1
          className="text-[40px] xl:text-[80px] font-bold bg-gradient-to-r from-[#99B84A] to-[#28282E] bg-clip-text text-transparent"
          style={{
            background: "linear-gradient(90deg, #99B84A, #28282E)",
            WebkitBackgroundClip: "text",
            WebkitTextStroke: "6px transparent",
            color: "#28282E",
          }}
        >
          <span className="invisible ml-[-20px]">.</span>API
        </h1>
        <h1 className={title}>REST API</h1>
      </div>
      <div className={container}>
        <Image src={SQL} alt="Redux Logo" width={46} height={56} />
        <h1 className={title}>SQL</h1>
      </div>
      <div className={container}>
        <h1
          className="text-[10px] xl:text-[84px] font-bold bg-gradient-to-r from-[#C54EE3] to-[#28282E] bg-clip-text text-transparent"
          style={{
            background: "linear-gradient(90deg, #C54EE3, #28282E)",
            WebkitBackgroundClip: "text",
            WebkitTextStroke: "2px transparent",
            color: "#28282E",
          }}
        >
          Performance
        </h1>
        <h1 className="text-[#80808E] text-[10px] xl:text-sm text-center uppercase">Performance Optimization</h1>
      </div>
      <div className={container}>
        <Image src={Router} alt="GitHub Logo" width={56} height={56} />
        <h1 className={title}>router</h1>
      </div>
      <div className={container}>
        <Image src={ssr_csr} alt="TypeScript Logo" width={56} height={56} />
        <h1 className="text-[#80808E] text-[10px] xl:text-sm text-center uppercase">SERVER & CLIENT SIDE</h1>
      </div>
      <div className={container}>
        <Image src={Typescript} alt="GitHub Logo" width={56} height={56} />
        <h1 className={title}>typescript</h1>
      </div>
      <div className={container}>
        <h1
          className="text-[40px] xl:text-[80px] font-bold bg-gradient-to-r from-[#99B84A] to-[#28282E] bg-clip-text text-transparent"
          style={{
            background: "linear-gradient(90deg, #99B84A, #28282E)",
            WebkitBackgroundClip: "text",
            WebkitTextStroke: "6px transparent",
            color: "#28282E",
          }}
        >
          <span className="invisible ml-[-20px]">.</span>SEO
        </h1>
        <h1 className="text-[#80808E] text-[10px] xl:text-sm text-center uppercase">Search engine optimization</h1>
      </div>
    </div>
  );
};

export default BentoBoxV2;
