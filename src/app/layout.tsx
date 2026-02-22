import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import type { Metadata } from "next";

import { SITE_INFO } from "@/src/lib/data";
import "@/src/styles/globals.css";

export const metadata: Metadata = {
  title: {
    template: `${SITE_INFO.nickname} | %s`,
    default: `${SITE_INFO.nickname} | ${SITE_INFO.role}`
  },
  description: `${SITE_INFO.role} building modern, responsive web applications and digital experiences.`,
  metadataBase: new URL(SITE_INFO.siteUrl),
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="relative bg-black text-white antialiased select-none"
      >
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            duration: 1.4
          }}
        >
          <main>{children}</main>
        </ReactLenis>
      </body>
    </html>
  );
}
