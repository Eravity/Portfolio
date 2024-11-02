const IdeLines: React.FC = (): JSX.Element => {
<<<<<<< HEAD
  const rows = Array.from({ length: 20 }, (_, x) => x + 1);
  return (
    <div className="flex gap-[30]">
      <div className="flex flex-col text-right text-[#45444B] gap-[0.625rem]">
        {rows.map((num) => (
          <h1 key={num}>{num}</h1>
        ))}
      </div>
      <div className="flex items-center gap-[30px]">
        <div className="w-[2px] h-[610] bg-[#45444B]"></div>
        <div className="w-[2px] h-[510] bg-[#45444B]"></div>
        <div className="w-[2px] h-[410] bg-[#45444B]"></div>
=======
  const rows = Array.from({ length: 20 }, (_, x) => x + 13);
  return (
    <div className="flex gap-[30]">
      <div className="flex flex-col text-right text-[#45444B] gap-1">
        {rows.map((num, index) => {
          let opacityValue = 1;
          let transitionClass = "";

          if (index < 2) {
            opacityValue = 0.25 + index * 0.25;
            transitionClass = "transition-opacity duration-500 ease-in";
          } else if (index >= rows.length - 3) {
            opacityValue = 0.75 - (index - (rows.length - 3)) * 0.25;
            transitionClass = "transition-opacity duration-500 ease-out";
          } else {
            transitionClass = "transition-opacity duration-500";
          }

          return (
            <h1 key={num} style={{ opacity: opacityValue }} className={transitionClass}>
              {num}
            </h1>
          );
        })}
      </div>
      <div className="flex items-center gap-[30px]">
        <div className="w-[2px] h-[510px] bg-[#45444B]"></div>
        <div className="w-[2px] h-[410px] bg-[#45444B]"></div>
        <div className="w-[2px] h-[310px] bg-[#45444B]"></div>
>>>>>>> master
      </div>
    </div>
  );
};

export default IdeLines;
