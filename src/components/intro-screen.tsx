import Image from "next/image";

import { SITE_INFO } from "@/src/lib/data";

export default function IntroScreen() {
  return (
    <section id="intro-screen" className="relative h-svh w-full overflow-hidden">
      <Image
        src={SITE_INFO.introImage}
        alt={SITE_INFO.introImageAlt}
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="container w-full px-8 pb-16 md:px-0 md:pb-0">
          <p className="inline-block text-base font-light tracking-[0.18em] text-white sm:text-lg">
            {SITE_INFO.introKicker}
          </p>
          <h1 className="mt-2 max-w-[18ch] text-4xl leading-[1.03] font-bold tracking-[0.015em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {SITE_INFO.introDisplayName}
          </h1>
        </div>
      </div>
    </section>
  );
}
