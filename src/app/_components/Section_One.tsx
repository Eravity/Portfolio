import Description from "@/app/_components/Description";
import Signature from "@/app/_components/Signature";

const Section_One: React.FC = (): JSX.Element => {
  return (
    <section className="mb-44 flex sm:scale-95 md:scale-90 lg:scale-85 xl:scale-90 2xl:scale-100 items-center mx-auto justify-around">
      <Description />
      <Signature />
    </section>
  );
};

export default Section_One;
