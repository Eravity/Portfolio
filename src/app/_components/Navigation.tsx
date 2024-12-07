"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationType = {
  href: string;
  label: string;
  color: string;
  section?: string;
};

export default function Navigation() {
  const pathname = usePathname();

  const navItems: NavigationType[] = [
    {
      href: "/",
      label: "_hello",
      color: "text-[#F0B65A]",
      section: "section1",
    },
    {
      href: "/skills",
      label: "_skills",
      color: "text-[#99B84A]",
      section: "section2",
    },
    {
      href: "/expertise",
      label: "_expertise",
      color: "text-[#1E95E7]",
      section: "section3",
    },
    {
      href: "/projects",
      label: "_projects",
      color: "text-[#C54EE3]",
      section: "section4",
    },
    {
      href: "/contacts",
      label: "_contacts",
      color: "text-[#E43869]",
      section: "section5",
    },
  ];

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    section?: string
  ) => {
    event.preventDefault();
    if (section) {
      document
        .getElementById(section)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <nav className="md:hidden w-screen flex text-center items-center mx-auto py-5 border border-transparent border-b-[#45444B]">
        <div className="mx-auto">
          <h1 className="text-3xl font-bold text-[#99B84A]">
            Cristian Cebotari
          </h1>
        </div>
      </nav>

      <nav className="hidden md:flex justify-center mx-auto mt-10 px-10 max-w-[700px] py-4 rounded-2xl bg-[#28282E] shadow-lg">
        <ul className="flex gap-10 lg:gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} legacyBehavior>
                <a
                  onClick={(e) => handleScroll(e, item.section)}
                  className={`${
                    pathname === item.href
                      ? item.color
                      : "text-[#B8B8B8] hover:text-[#dddddd] transition duration-200"
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
