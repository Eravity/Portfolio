"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/",
      label: "_hello",
      color: "text-[#F0B65A]",
    },
    {
      href: "/skills",
      label: "_skills",
      color: "text-[#99B84A]",
    },
    {
      href: "/projects",
      label: "_projects",
      color: "text-[#1E95E7]",
    },
    {
      href: "/contacts",
      label: "_contacts",
      color: "text-[#C54EE3]",
    },
    {
      href: "/aboutme",
      label: "_about me",
      color: "text-[#E43869]",
    },
  ];

  return (
    <nav className="flex justify-center m-auto my-5 max-w-[700px] py-4 rounded-2xl bg-[#28282E] shadow-lg ">
      <ul className="flex gap-14 ">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`${
                pathname === item.href
                  ? `${item.color}`
                  : `text-[#B8B8B8] hover:text-[#dddddd] transition duration-200`
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
