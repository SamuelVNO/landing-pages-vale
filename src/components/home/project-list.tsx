"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMotionValue, useSpring } from "motion/react";
import * as m from "motion/react-m";
import type { HomeProject } from "./projects";

const PREVIEW_W = 380;
const PREVIEW_H = 238;

export function ProjectList({ projects }: { projects: readonly HomeProject[] }) {
  const [active, setActive] = useState<number | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 260, damping: 28, mass: 0.7 });
  const y = useSpring(mouseY, { stiffness: 260, damping: 28, mass: 0.7 });

  function place(clientX: number, clientY: number) {
    mouseX.set(clientX + 28);
    mouseY.set(clientY - PREVIEW_H / 2);
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (e.pointerType !== "mouse") return;
    place(e.clientX, e.clientY);
  }

  function handlePointerEnter(e: React.PointerEvent, index: number) {
    if (e.pointerType !== "mouse") return;
    // Primeira entrada: posiciona sem a mola "voar" desde a origem.
    if (active === null) {
      mouseX.jump(e.clientX + 28);
      mouseY.jump(e.clientY - PREVIEW_H / 2);
      x.jump(e.clientX + 28);
      y.jump(e.clientY - PREVIEW_H / 2);
    }
    setActive(index);
  }

  function handleFocus(e: React.FocusEvent<HTMLAnchorElement>, index: number) {
    const rect = e.currentTarget.getBoundingClientRect();
    place(rect.right - PREVIEW_W - 24, rect.top + rect.height / 2);
    setActive(index);
  }

  return (
    <>
      <ul
        className="border-t border-[#111111]/15"
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setActive(null)}
      >
        {projects.map((p, i) => (
          <li key={p.slug} className="border-b border-[#111111]/15">
            <Link
              href={p.href}
              className="group block py-7 outline-none md:py-10"
              onPointerEnter={(e) => handlePointerEnter(e, i)}
              onFocus={(e) => handleFocus(e, i)}
              onBlur={() => setActive(null)}
            >
              <div className="flex flex-col gap-3 transition-transform duration-500 ease-out md:flex-row md:items-baseline md:gap-8 md:group-hover:translate-x-4 md:group-focus-visible:translate-x-4">
                <span className="font-mono text-xs tracking-wide text-[#6B6B6B] md:w-10 md:shrink-0">
                  {p.number}
                </span>
                <h3 className="text-[clamp(2.4rem,7.2vw,6.75rem)] font-medium leading-[0.95] tracking-[-0.035em] transition-colors duration-300 group-hover:text-[#E8451E] group-focus-visible:text-[#E8451E]">
                  {p.name}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-[#6B6B6B] md:ml-auto md:max-w-[14rem] md:text-right">
                  <span
                    aria-hidden="true"
                    className="mr-2 inline-block size-1.5 rounded-full bg-[#E8451E] md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100"
                  />
                  {p.segment} · {p.city}
                </p>
              </div>

              {/* Celular: cartão com a prévia visível */}
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-sm bg-[#111111]/5 md:hidden">
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 1px"
                  // A primeira prévia é o maior elemento da tela no celular (LCP).
                  preload={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="object-cover"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop: prévia que segue o cursor com mola */}
      <m.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-50 hidden md:block"
        style={{ x, y, width: PREVIEW_W, height: PREVIEW_H }}
        initial={false}
        animate={{ opacity: active === null ? 0 : 1, scale: active === null ? 0.92 : 1 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <div className="relative size-full overflow-hidden rounded-sm bg-[#111111] shadow-[0_24px_60px_-20px_rgba(17,17,17,0.45)]">
          {projects.map((p, i) => (
            <Image
              key={p.slug}
              src={p.image}
              alt=""
              fill
              sizes={`${PREVIEW_W}px`}
              className={`object-cover transition-opacity duration-200 ${
                active === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </m.div>
    </>
  );
}
