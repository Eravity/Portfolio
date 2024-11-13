import Description from "@/app/_components/Description";
import Signature from "@/app/_components/Signature";

const Section_One: React.FC = (): JSX.Element => {
  return (
    <section className="mb-44 2xl:w-11/12 xl:w-11/12 lg:w-11/12 flex items-center mx-auto justify-between">
      <Description />
      <Signature />
    </section>
  );
};

export default Section_One;
