interface SectionIndicatorProps {
  text: string;
}

const SectionIndicatorProps: React.FC<SectionIndicatorProps> = ({
  text,
}): JSX.Element => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-2/5 h-[1px] bg-[#45444B]"></div>
      <div className="p-2 text-[#B8B8B8]">{text}</div>
      <div className="w-2/5 h-[1px] bg-[#45444B]"></div>
    </div>
  );
};

export default SectionIndicatorProps;
