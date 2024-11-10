import Section_One from "@/app/_components/Section_One";
import Section_Two from "@/app/_components/Section_Two";
import SectionIndicator from "@/app/_components/SectionIndicator";
import Section_Three from "@/app/_components/Section_Three";

export default function Home() {
  return (
    <div className="mx-auto">
      <Section_One />
      <SectionIndicator text="Skills" />
      <Section_Two />
      <SectionIndicator text="Projects" />
      <Section_Three/>
    </div>
  );
}
