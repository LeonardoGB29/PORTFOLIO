"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ArrowLeft, Code, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";

import TransitionLink from "@/src/components/transition-link";
import { cn } from "@/src/lib/utils";
import type { Project } from "@/src/types";

interface Props {
  project: Project;
}
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectDetails({ project }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectGallery = (project.galleryImages ?? []).slice(0, 3);

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [project.id]);

  useGSAP(
    () => {
      if (!containerRef.current || !project) return;

      gsap.set(".fade-in-later", {
        autoAlpha: 0,
        y: 30
      });
      const tl = gsap.timeline({
        delay: 0.5
      });
      tl.to(".fade-in-later", {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1
      });
      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: containerRef, dependencies: [project.slug] }
  );

  useGSAP(
    () => {
      if (!containerRef.current || !project) return;
      if (window.innerWidth < 992) return;

      const tween = gsap.to("#info", {
        filter: "blur(3px)",
        autoAlpha: 0,
        scale: 0.9,
        position: "sticky",
        scrollTrigger: {
          trigger: "#info",
          start: "bottom bottom",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: 0.5
        }
      });
      return () => {
        tween.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: containerRef, dependencies: [project.slug] }
  );

  return (
    <section className="relative overflow-hidden px-6 pt-5 pb-14 md:px-0">
      <div className="pointer-events-none absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute top-36 -right-24 h-80 w-80 rounded-full bg-primary-dark/12 blur-3xl" />

      <div className="container relative z-10" ref={containerRef}>
        <TransitionLink
          href="/"
          className="group mb-16 inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 text-white/90 transition-colors hover:border-primary/70 hover:text-primary"
        >
          <ArrowLeft className="transition-all duration-300 group-hover:-translate-x-1" />
          Back
        </TransitionLink>

        <div className="top-0 flex min-h-[calc(100dvh-100px)]" id="info">
          <div className="relative w-full">
            <div className="mx-auto mb-10 flex max-w-7xl items-start gap-6">
              <div className="w-full">
                <h1 className="fade-in-later overflow-hidden text-4xl leading-none opacity-0 md:text-6xl">
                  <span className="cursor inline-block">{project.name}</span>
                </h1>
                <div className="fade-in-later mt-5 h-1 w-32 rounded-full bg-linear-to-r from-primary to-primary-dark opacity-90" />
              </div>

              <div className="fade-in-later flex items-center gap-3 opacity-0">
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] transition-colors hover:border-primary/70 hover:text-primary"
                  >
                    <Code size={22} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] transition-colors hover:border-primary/70 hover:text-primary"
                  >
                    <ExternalLink size={22} />
                  </a>
                )}
              </div>
            </div>

            <div className="mx-auto max-w-7xl space-y-10 pb-20">
              <div className="fade-in-later border-b border-white/10 pb-7">
                <p className="text-brand-gradient mb-3 text-xs font-semibold tracking-[0.24em] uppercase">
                  Year
                </p>
                <span className="cursor text-lg text-white/95">{project.year}</span>
              </div>

              <div className="fade-in-later border-b border-white/10 pb-7">
                <p className="text-brand-gradient mb-3 text-xs font-semibold tracking-[0.24em] uppercase">
                  Tech & Technique
                </p>
                <p className="cursor text-lg text-white/90">
                  {project.techStack.join(", ")}
                </p>
              </div>

              <div className="fade-in-later space-y-7">
                <p className="text-brand-gradient mb-3 text-xs font-semibold tracking-[0.24em] uppercase">
                  Description
                </p>
                <p className="markdown-text cursor text-lg text-white/90">
                  {project.description}
                </p>

                <p className="text-brand-gradient mb-3 text-xs font-semibold tracking-[0.24em] uppercase">
                  Key Features
                </p>
                <ul className="space-y-2.5">
                  {project.features.map((feat) => (
                    <li className="flex items-start gap-3 text-lg text-white/88" key={feat}>
                      <span className="mt-2 inline-block size-1.5 rounded-full bg-linear-to-r from-primary to-primary-dark" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {projectGallery.length > 0 && (
          <div className="fade-in-later relative mx-auto mt-4 max-w-7xl space-y-7">
            {projectGallery.map((image, idx) => (
              <a
                key={image}
                href={image}
                target="_blank"
                rel="noreferrer noopener"
                className={cn(
                  "group relative block overflow-hidden rounded-2xl border border-white/12 bg-black shadow-[0_18px_50px_rgba(0,0,0,0.35)] transition-colors hover:border-primary/45",
                  idx === 0 && "w-full md:w-[86%]",
                  idx === 1 && "ml-auto w-full md:w-[82%]",
                  idx === 2 && "w-full md:ml-16 md:w-[88%]"
                )}
              >
                <div
                  className={cn(
                    "w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-out group-hover:scale-[1.06]",
                    idx === 0 && "aspect-[16/9]",
                    idx === 1 && "aspect-[15/9]",
                    idx === 2 && "aspect-[16/10]"
                  )}
                  style={{ backgroundImage: `url(${image})` }}
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/12 via-transparent to-primary-dark/12 opacity-70" />

                <span className="absolute top-4 right-4 inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-gray-950/70 text-white opacity-0 transition-all group-hover:opacity-100 group-hover:hover:border-primary/70 group-hover:hover:bg-primary group-hover:hover:text-white">
                  <ExternalLink size={18} />
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
