"use client";

import { LazyMotion, MotionConfig } from "motion/react";

// As features de animação (~90 KB) chegam depois da primeira pintura, em outro chunk.
const loadFeatures = () => import("./motion-features").then((mod) => mod.default);

/**
 * Envolva cada rota com isto e use `m.div` (de "motion/react-m") em vez de `motion.div`:
 * só carrega as features que usamos, depois da primeira pintura, e respeita "reduzir movimento".
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
