import Section_One from "@/app/_components/Section_One";
import Section_Two from "@/app/_components/Section_Two";
import SectionIndicator from "@/app/_components/SectionIndicator";
import Section_Three from "@/app/_components/Section_Three";
import Section_Four from "@/app/_components/Section_Four";
import Section_Five from "@/app/_components/Section_Five";

export default function Home() {
  const sectionContainer = "w-full max-w-screen-2xl mx-auto";
  return (
    <>
      <div className={`${sectionContainer}`}>
        <Section_One />
        <SectionIndicator text="Skills" />
      </div>

      <div className={`${sectionContainer}`}>
        <Section_Two />
        <SectionIndicator text="Expertise" />
      </div>

      <div className={`${sectionContainer}`}>
        <Section_Three />
        <SectionIndicator text="Projects" />
      </div>

      <div className={`${sectionContainer}`}>
        <Section_Four />
        <SectionIndicator text="Contacts" />
      </div>

      <div className={`${sectionContainer}`}>
        <Section_Five />
      </div>
    </>
  );
}
