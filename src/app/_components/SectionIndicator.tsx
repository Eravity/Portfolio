interface SectionIndicatorProps {
  text: string;
  width?: string; // Add width prop
}

const SectionIndicatorProps: React.FC<SectionIndicatorProps> = ({
  text,
  width = "w-1/4", // Default width
}): JSX.Element => {
  return (
    <div className="flex items-center justify-center">
      <div className={`${width} h-[1px] bg-[#45444B]`}></div>
      <div className="p-2 text-[#B8B8B8] text-sm sm:text-base">{text}</div>
      <div className={`${width} h-[1px] bg-[#45444B]`}></div>
    </div>
  );
};

export default SectionIndicatorProps;
