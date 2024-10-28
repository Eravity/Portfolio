const IdeLines: React.FC = (): JSX.Element => {
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
      </div>
    </div>
  );
};

export default IdeLines;
