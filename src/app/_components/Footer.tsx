const Footer: React.FC = () => {
  return (
    <footer className="w-full h-16 bg-[#28282E] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#80808E] text-center">
        You also can find me on{" "}
        <a
          href="https://www.linkedin.com/in/cebotari-cristian-b28803192/"
          target="_blank"
        >
          <span className="underline">LinkedIn</span>
        </a>{" "}
        or{" "}
        <a href="https://github.com/Eravity" target="_blank">
          <span className="underline">GitHub</span>
        </a>
      </h1>
    </footer>
  );
};

export default Footer;
