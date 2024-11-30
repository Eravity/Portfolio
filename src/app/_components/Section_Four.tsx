const Section_Four: React.FC = () => {
  return (
    <section className="flex max-w-[390px] flex-col gap-8 2xl:max-w-screen-xl lg:max-w-screen-lg xl:max-w-screen-xl md:max-w-[590px] sm:max-w-[460px] scale-[.8] sm:scale-100 xs:max-w-xs lg:flex-row justify-between my-28 2xl:scale-100 2xl:w-11/12 xl:w-11/12 lg:scale-[90%] lg:w-11/12 xl:scale-90 mx-auto md:scale-110"
    title="Section 4"
    id="section4"
    style={{ scrollBehavior: 'smooth' }}>
      <h1 className="text-6xl w-[330px] 2xl:scale-100 lg:scale-[90%] xl:scale-90 font-bold text-[#1E95E7] leading-[75px]">
        Let&apos;s get
        <br />
        <span className="text-[#E43869]">started.</span>
      </h1>

      <form className="w-[400px] sm:w-auto">
        <h1 className="text-2xl w-[405px] sm:w-[460px] md:w-[590px] font-bold text-[#80808E] leading-10">
          My name is{" "}
          <input
            type="text"
            placeholder="YOUR FULL NAME"
            className="bg-[#1F1F23] sm:w-52 w-[145px] md:w-[340px] border-0 border-b-[#45444B] placeholder:text-[#45444B] placeholder:text-sm border-b-[1px] focus:outline-none text-[#1E95E7]"
          />{" "}
          and I<br />
          have a{" "}
          <input
            type="text"
            placeholder="WEBSITE, PROBLEM, ISSUE, ETC."
            className="bg-[#1F1F23] w-[220px] sm:w-[17.5rem] md:w-[410px] border-0 border-b-[#45444B] placeholder:text-[#45444B] placeholder:text-sm border-b-[1px] focus:outline-none text-[#E43869]"
          />{" "}
          that
          <br />
          needs help. You can reach me at
          <br />
          <input
            type="email"
            placeholder="YOUR EMAIL ADDRESS"
            className="bg-[#1F1F23] w-[295px] sm:w-[345px] border-0 border-b-[#45444B] placeholder:text-[#45444B] placeholder:text-sm border-b-[1px] focus:outline-none text-[#1E95E7]"
          />{" "}
          to get
          <br />
          things started.
        </h1>
        <div className="flex justify-end mt-5">
          <button className="border px-3 py-2 rounded-xl border-[#45444B] font-bold text-[#80808E] hover:scale-110 duration-150">
            - SEND INFO
          </button>
        </div>
      </form>
    </section>
  );
};

export default Section_Four;
