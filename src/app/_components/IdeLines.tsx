const IdeLines: React.FC = (): JSX.Element => {
  const rowsLarge = Array.from({ length: 20 }, (_, x) => x + 1);

  return (
    <>
      <div className="hidden md:flex md:gap-4 xl:gap-5 2xl:gap-6">
        <div className="flex flex-col text-right text-[#45444B] gap-1">
          {rowsLarge.map((num, index) => {
            let opacityValue = 1;
            let transitionClass = "";

            if (index < 2) {
              opacityValue = 0.25 + index * 0.25;
              transitionClass = "transition-opacity duration-500 ease-in";
            } else if (index >= rowsLarge.length - 5) {
              opacityValue = 0.75 - (index - (rowsLarge.length - 3)) * 0.25;
              transitionClass =
                "hidden lg:flex transition-opacity duration-500 ease-out";
            } else {
              transitionClass = "transition-opacity duration-500";
            }

            return (
              <h1
                key={num}
                style={{ opacity: opacityValue }}
                className={transitionClass}
              >
                {num}
              </h1>
            );
          })}
        </div>
        <div className="flex items-center md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7">
          <div className="hidden lg:flex w-[1px] h-[450px] bg-[#45444B]"></div>
          <div className="w-[1px] h-[350px] bg-[#45444B]"></div>
          <div className="w-[1px] h-[250px] bg-[#45444B]"></div>
        </div>
      </div>
    </>
  );
};

export default IdeLines;
