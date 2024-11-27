import Description from "@/app/_components/Description";
import Signature from "@/app/_components/Signature";

const Section_One: React.FC = (): JSX.Element => {
  return (
    <section className="my-16 flex md:flex-row items-center mx-auto justify-around 2xl:justify-between max-w-screen-2xl">
      <Description />
      <Signature />
    </section>
  );
};

export default Section_One;


