import type { ReactNode } from "react";
import { body, display } from "@/components/advocacia/fontes";
import { MotionProvider } from "@/components/shared/motion-provider";
import "./theme.css";

export default function AdvocaciaLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`theme-advocacia ${display.variable} ${body.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
    >
      <MotionProvider>{children}</MotionProvider>
    </div>
  );
}
