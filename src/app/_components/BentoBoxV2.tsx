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
    <div className="grid grid-cols-4 max-w-md gap-2 md:hidden mx-auto">
      <div className={container}>
        <Image src={HTML} alt="HTML Logo" width={56} height={56} />
        <h1 className={title}>HTML</h1>
      </div>
      <div className={container}>
        <Image src={CSS} alt="CSS Logo" width={56} height={56} />
        <h1 className={title}>CSS</h1>
      </div>
      <div className={container}>
        <Image src={Javascript} alt="JavaScript Logo" width={56} height={56} />
        <h1 className={title}>JavaScript</h1>
      </div>
      <div className={container}>
        <Image src={ReactLogo} alt="React Logo" width={56} height={56} />
        <h1 className={title}>React</h1>
      </div>
      <div className={container}>
        <Image src={Redux} alt="Redux Logo" width={56} height={56} />
        <h1 className={title}>Redux</h1>
      </div>
      <div className={container}>
        <Image src={NextJs} alt="Next.js Logo" width={56} height={56} />
        <h1 className={title}>Next.js</h1>
      </div>
      <div className={container}>
        <Image src={Typescript} alt="TypeScript Logo" width={56} height={56} />
        <h1 className={title}>TypeScript</h1>
      </div>
      <div className={container}>
        <Image src={GitHub} alt="GitHub Logo" width={56} height={56} />
        <h1 className={title}>GitHub</h1>
      </div>
      <div className={container}>
        <Image src={Supabase} alt="HTML Logo" width={56} height={56} />
        <h1 className={title}>Supabase</h1>
      </div>
      <div className={container}>
        <Image src={Tailwind} alt="CSS Logo" width={56} height={56} />
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
        <h1 className={`${title}`}>Single Page Application</h1>
      </div>
      <div className={container}>
        <Image src={ReactLogo} alt="React Logo" width={56} height={56} />
        <h1 className={title}>React</h1>
      </div>
      <div className={container}>
        <Image src={Redux} alt="Redux Logo" width={56} height={56} />
        <h1 className={title}>Redux</h1>
      </div>
      <div className={container}>
        <Image src={NextJs} alt="Next.js Logo" width={56} height={56} />
        <h1 className={title}>Next.js</h1>
      </div>
      <div className={container}>
        <Image src={Typescript} alt="TypeScript Logo" width={56} height={56} />
        <h1 className={title}>TypeScript</h1>
      </div>
      <div className={container}>
        <Image src={GitHub} alt="GitHub Logo" width={56} height={56} />
        <h1 className={title}>GitHub</h1>
      </div>
    </div>
  );
};

export default BentoBoxV2;
