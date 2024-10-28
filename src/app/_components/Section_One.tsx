import Description from "@/app/_components/Description";
import Signature from "@/app/_components/Signature";

const Section_One: React.FC = (): JSX.Element => {
  return (
    <section className="min-h-[1080px] flex flex-col md:flex-row items-center justify-between px-4 py-8">
      <div className="flex-1 mb-4 md:mb-0">
        <Description />
      </div>
      <div className="flex-1">
        <Signature />
      </div>
    </section>
  );
};

export default Section_One;
