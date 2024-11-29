import BentoBox from "@/app/_components/BentoBox";
import BentoBoxV2 from "@/app/_components/BentoBoxV2";

const Section_Two: React.FC = (): JSX.Element => {
  return (
    <section className="mb-28 flex mx-auto">
      <div className="hidden md:block mx-auto">
        <BentoBox />
      </div>
      <BentoBoxV2 />
    </section>
  );
};

export default Section_Two;
