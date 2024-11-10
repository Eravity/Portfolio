type Props = {
  name: string;
  projectName: string;
};

const IdeLines: React.FC<Props> = ({ name, projectName }): JSX.Element => {
  const rows = Array.from({ length: 7 }, (_, x) => x + 1);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col text-right text-[#45444B] gap-2">
        {rows.map((num, index) => {
          let opacityValue = 1;
          let transitionClass = "";

          if (index < 1) {
            opacityValue = 0.25 + index * 0.25;
            transitionClass = "transition-opacity duration-500 ease-in";
          } else if (index >= rows.length - 1) {
            opacityValue = 0.75 - (index - (rows.length - 1)) * 0.25;
            transitionClass = "transition-opacity duration-500 ease-out";
          } else {
            transitionClass = "transition-opacity duration-500";
          }

          return (
            <h1
              key={num}
              style={{ opacity: opacityValue }}
              className={`text-sm leading-[18px] ${transitionClass}`}
            >
              {num}
            </h1>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        <div className="w-[1px] h-[140px] bg-[#45444B]"></div>
        <h1 className="text-[#80808E] text-sm leading-[26px]">&#47;* {name}<br/><span className="text-[#99B84A]">{projectName}</span><br/>*&#47;</h1>
      </div>
    </div>
  );
};

export default IdeLines;
