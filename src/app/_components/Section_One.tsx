import Description from "@/app/_components/Description";
import Signature from "@/app/_components/Signature";

const Section_One: React.FC = (): JSX.Element => {
  return (
    <section className="mb-44 flex items-center mx-auto justify-around">
      <Description />
      <Signature />
    </section>
  );
};

export default Section_One;
