"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import Button from "@/src/components/button";
import Magnet from "@/src/components/magnet";
import ShinyText from "@/src/components/shiny-text";
import { PROJECTS, SITE_INFO } from "@/src/lib/data";

import TransitionLink from "./transition-link";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Banner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const featuredProject = PROJECTS[0];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 70%",
          end: "bottom 10%",
          scrub: 1
        }
      });

      tl.fromTo(
        ".slide-up-and-fade",
        { y: 0 },
        { y: -150, opacity: 0, stagger: 0.02 }
      );
    },
    { scope: containerRef }
  );

  useGSAP(
    (context: gsap.Context) => {
      if (!context) return;

      const animateUps = context.selector?.(".animateUp") ?? [];

      if (animateUps.length > 0) {
        const wrapperTl = gsap.timeline();

        wrapperTl
          .to(".wrapper", { overflow: "hidden", duration: 0.4 })
          .from(animateUps, {
            y: "100%",
            duration: 2,
            delay: 1.5,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: codeRef.current,
              start: "top+=100 bottom",
              toggleActions: "play none none reverse"
            }
          });
      }
    },
    { scope: codeRef }
  );
  return (
    <section id="banner" className="relative">
      <div
        className="container flex h-svh justify-center gap-10 max-lg:flex-col max-md:pb-10 lg:items-end lg:justify-between lg:gap-0"
        ref={containerRef}
      >
        <div className="max-w-[544px] flex-col items-start justify-center self-center pt-20 max-lg:flex md:pt-0">
          <h1 className="banner-title slide-up-and-fade text-5xl leading-[0.9] font-black tracking-[0.12em] sm:text-[82px]">
            <span className="text-brand-gradient cursor inline-block drop-shadow-[0_8px_26px_rgba(42,167,255,0.4)]">
              {SITE_INFO.heroTitleTop}
            </span>
            <br />
            <span className="text-brand-gradient cursor inline-block drop-shadow-[0_8px_26px_rgba(14,139,116,0.4)] lg:ml-4">
              {SITE_INFO.heroTitleBottom}
            </span>
          </h1>
          <ShinyText
            className="slide-up-and-fade cursor text-lg md:text-xl"
            text={SITE_INFO.heroSummary}
          />
          {featuredProject && (
            <Magnet magnetStrength={4}>
              <TransitionLink href={`/projects/${featuredProject.slug}`}>
                <Button
                  as="button"
                  variant="primary"
                  className="banner-Button slide-up-and-fade cursor mt-9 rounded-md font-semibold text-white transition-colors duration-500 hover:text-black"
                >
                  Featured Project
                </Button>
              </TransitionLink>
            </Magnet>
          )}
        </div>

        <div className={`cursor lg:mb-20`}>
          <code
            ref={codeRef}
            className="slide-up-and-fade hidden max-w-[430px] flex-col text-xs tracking-widest text-white md:text-sm lg:flex"
          >
            <span className="text-primary block text-lg font-bold">
              {"<span>"}
            </span>
            <div className="inline-block leading-7 md:translate-x-5">
              {SITE_INFO.heroCodeLines.map((line, idx) => (
                <div className="wrapper" key={`${line}-${idx}`}>
                  <span className="animateUp block max-w-[34ch] whitespace-normal">
                    {line}
                  </span>
                </div>
              ))}
            </div>
            <span className="text-primary block text-lg font-bold">
              {"</span>"}
            </span>
          </code>

          <code className="slide-up-and-fade flex flex-col text-xs tracking-widest text-white lg:hidden lg:text-sm">
            <span className="text-primary block text-lg font-bold">
              {"<span>"}
            </span>
            <div className="inline-block leading-7 lg:translate-x-5">
              <span className="ms-4 inline-block">
                {SITE_INFO.heroCodeLines.join(" ")}
              </span>
            </div>
            <span className="text-primary block text-lg font-bold">
              {"</span>"}
            </span>
          </code>
        </div>
      </div>
    </section>
  );
}
