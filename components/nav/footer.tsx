"use client";
import React from "react";
import { cn } from "../../lib/utils";
import { Container } from "../layout/container";
import Link from "next/link";
import { Icon } from "../icon";
// import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";
import { useLayout } from "../layout/layout-context";

export default function Footer() {
  const { theme, globalSettings } = useLayout();
  const footer = globalSettings?.footer;

  return (
    <footer className={cn(`bg-gradient-to-br bg-red`)}>
      <Container className="relative" size="small">
        <div className="flex justify-between items-center gap-6 flex-wrap">
          <Link
            href="/"
            className="group mx-2 flex items-center font-bold tracking-tight text-gray-400 dark:text-gray-300 opacity-50 hover:opacity-100 transition duration-150 ease-out whitespace-nowrap"
          >
            <Icon
              parentColor={footer.color}
              data={{
                name: globalSettings?.header.icon.name,
                color:
                  theme.color === "primary"
                    ? "primary"
                    : globalSettings?.header.icon.color,
                style: globalSettings?.header.icon.style,
              }}
              className="inline-block h-10 w-auto group-hover:text-orange-500"
            />
          </Link>
          {/* <RawRenderer parentColor={footer.color} rawData={pageData} /> */}
        </div>
        <div
          className={cn(
            `absolute h-1 bg-gradient-to-r from-transparent`,
            theme.darkMode === "primary"
              ? `via-white`
              : `via-black dark:via-white`,
            "to-transparent bottom-0 left-4 right-4 -z-1 opacity-5"
          )}
        />
      </Container>
    </footer>
  );
}
