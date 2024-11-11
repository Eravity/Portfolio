import BlinkingCursor from "@/app/_components/BlinkingCursor";
import ProjectFrame from "@/app/_components/ProjectFrame";

const Section_Three: React.FC = () => {
  return (
    <section className="mt-16 mb-32 lg:w-11/12 flex max-w-[1480px] flex-col mx-auto justify-around">
      <h1 className="text-[#99B84A] mb-5 uppercase flex gap-1">
        &#47;&#47;Latest Projects
        <BlinkingCursor />
      </h1>
      <div className="flex gap-5 mx-auto w-full">
        <ProjectFrame
          id={1}
          name="_Project 1"
          projectName="Vira's Balcony"
          description="This project features a booking application for a start-up offering luxury cabin rentals in a serene forest at the foothills of the mountains. The app provides an intuitive platform for users to explore available cabins, view real-time availability, and securely complete bookings. With a focus on user experience, the application ensures easy navigation and seamless integration with payment systems, making it effortless for customers to book their perfect getaway in this tranquil and exclusive destination."
        />
        <ProjectFrame
          id={2}
          name="_Project 2"
          projectName="Vira's Dashboard"
          description="A dashboard application for managing bookings, cabin information and all the booking options of the Vira's Balcony application."
        />
        <ProjectFrame
          id={3}
          name="_Project 3"
          projectName="COMING SOON"
          description="More information coming soon!"
        />
      </div>
    </section>
  );
};

export default Section_Three;