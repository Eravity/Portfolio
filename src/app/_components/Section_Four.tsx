const Section_Four: React.FC = () => {
  return (
    <section className="flex justify-between my-28 2xl:scale-100 2xl:w-11/12 xl:w-11/12 lg:scale-[90%] lg:w-11/12 xl:scale-90 mx-auto">
      <h1 className="text-6xl 2xl:scale-100 lg:scale-[90%] xl:scale-90 font-bold text-[#1E95E7] leading-[75px]">
        Let&apos;s get
        <br />
        <span className="text-[#E43869]">started.</span>
      </h1>

      <form className="">
        <h1 className="text-2xl font-bold text-[#80808E] leading-10">
          My name is{" "}
          <input
            type="text"
            placeholder="YOUR FULL NAME"
            className="bg-[#1F1F23] border-0 border-b-[#45444B] placeholder:text-[#45444B] placeholder:text-sm border-b-[1px] focus:outline-none text-[#1E95E7]"
          />{" "}
          and I<br />
          have a{" "}
          <input
            type="text"
            placeholder="WEBSITE, PROBLEM, ISSUE, ETC."
            className="bg-[#1F1F23] w-[405px] border-0 border-b-[#45444B] placeholder:text-[#45444B] placeholder:text-sm border-b-[1px] focus:outline-none text-[#E43869]"
          />{" "}
          that
          <br />
          needs help. You can reach me at
          <br />
          <input
            type="email"
            placeholder="YOUR EMAIL ADDRESS"
            className="bg-[#1F1F23] w-[405px] border-0 border-b-[#45444B] placeholder:text-[#45444B] placeholder:text-sm border-b-[1px] focus:outline-none text-[#1E95E7]"
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
