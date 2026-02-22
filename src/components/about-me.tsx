"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import { SITE_INFO } from "@/src/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutMe() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "about-me-in",
          trigger: container.current,
          start: "top 70%",
          end: "bottom bottom",
          scrub: 0.5
        }
      });

      tl.from(".slide-up-and-fade", {
        y: 150,
        opacity: 0,
        stagger: 0.05
      });
    },
    { scope: container }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "about-me-out",
          trigger: container.current,
          start: "bottom 50%",
          end: "bottom 10%",
          scrub: 0.5
        }
      });

      tl.to(".slide-up-and-fade", {
        y: -150,
        opacity: 0,
        stagger: 0.02
      });
    },
    { scope: container }
  );

  return (
    <section className="pb-section" id="about-me">
      <div className="container" ref={container}>
        <p className="slide-up-and-fade border-b pb-3 text-gray-400">Perfil</p>

        <div className="mt-9 grid items-start gap-10 md:grid-cols-12">
          <div className="cursor space-y-4 md:col-span-6">
            <h2 className="slide-up-and-fade text-3xl leading-tight font-semibold sm:text-4xl">
              {SITE_INFO.aboutLeftTitle}
            </h2>
            <div className="space-y-3 text-white/80">
              {SITE_INFO.aboutLeftItems.map((item, idx) => (
                <p className="slide-up-and-fade text-lg" key={`${item}-${idx}`}>
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="cursor md:col-span-6">
            <h2 className="slide-up-and-fade text-3xl leading-tight font-semibold sm:text-4xl">
              {SITE_INFO.aboutRightTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {SITE_INFO.aboutRightItems.map((item, idx) => (
                <li
                  className="slide-up-and-fade text-lg text-white/80"
                  key={`${item}-${idx}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="cursor slide-up-and-fade col-span-full mt-8 text-center md:mt-12">
            <p className="text-brand-gradient text-2xl leading-snug font-medium md:text-4xl">
              {SITE_INFO.aboutHeadline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
