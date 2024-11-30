import BentoBox from "@/app/_components/BentoBox";
import BentoBoxV2 from "@/app/_components/BentoBoxV2";

const Section_Two: React.FC = (): JSX.Element => {
  return (
    <section
      className="my-16 md:mb-72 lg:mt-0 lg:mb-56 xl:mb-24 flex mx-auto scroll-smooth"
      title="Section 2"
      id="section2"
    >
      <div className="hidden md:block lg:scale-110 xl:scale-100 mx-auto">
        <BentoBox />
      </div>
      <BentoBoxV2 />
    </section>
  );
};

export default Section_Two;
