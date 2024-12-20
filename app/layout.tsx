import "../styles.css";
import React from "react";
// import { ThemeProvider } from "../components/theme-provider";
import { Montserrat, Playfair_Display } from "next/font/google";
import { cn } from "../lib/utils";
import { Metadata } from "next";
// import client from "../tina/__generated__/client";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Tina",
  description: "Tina Cloud Starter",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const globalQuery = await client.queries.global({
  //   relativePath: "index.json",
  // });
  // const global = globalQuery.data.global;

  // const selectFont = (fontName: string) => {
  //   switch (fontName) {
  //     case "nunito":
  //       return `font-nunito ${nunito.variable}`;
  //     case "lato":
  //       return `font-lato ${lato.variable}`;
  //     case "sans":
  //     default:
  //       return `font-sans ${fontSans.variable} `;
  //   }
  // };
  // const fontVariable = selectFont(global.theme.font);

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${playfairDisplay.variable}`}
    >
      <body
        className={cn(
          "min-h-screen flex flex-col antialiased",
          "font-montserrat"
        )}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          forcedTheme={global.theme.darkMode}
        > */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
