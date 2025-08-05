"use client";

import { headerLinks } from "@/data/headerLinks";
import Link from "next/link";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import HeaderLink from "./HeaderLink";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineLightMode } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function Header() {
  const currentUrl = usePathname();

  return (
    <div className="flex justify-between items-center fixed w-full py-3 px-6 bg-headerBg border-b border-white/30">
      {/* Left nav */}
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hover:bg-hoverAccent p-2 rounded-full transition-all duration-300"
          >
            <IoMdMenu className="text-2xl" />
          </button>

          <Link href="/" className="font-bold text-2xl">
            Google
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-2">
          {headerLinks.map((headerLink) => {
            const isCurrentPath = currentUrl === headerLink.href;

            return (
              <li key={headerLink.title}>
                <HeaderLink
                  href={headerLink.href}
                  title={headerLink.title}
                  isCurrentPath={isCurrentPath}
                  icon={<headerLink.icon className="text-xl" />}
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right nav */}
      <div className="flex items-center gap-5">
        <button
          type="button"
          className="hover:bg-hoverAccent p-2 rounded-full transition-all duration-300"
        >
          <MdOutlineLightMode className="text-2xl" />
        </button>

        <button
          type="button"
          className="hover:bg-hoverAccent p-2 rounded-full transition-all duration-300"
        >
          <CgMenuGridO className="text-2xl" />
        </button>

        <button
          type="button"
          className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center text-xl"
        >
          T
        </button>
      </div>
    </div>
  );
}
