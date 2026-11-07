import { Familjen_Grotesk, JetBrains_Mono } from "next/font/google";
import { MotionProvider } from "@/components/shared/motion-provider";

const body = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-body",
});

const code = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-code",
});

export default function HomeLayout({ children }: LayoutProps<"/">) {
  return (
    <div
      className={`${body.variable} ${code.variable} min-h-screen bg-[#FAFAF7] font-sans text-[#111111] selection:bg-[#E8451E] selection:text-white`}
      style={{ "--font-display": "var(--font-body)" } as React.CSSProperties}
    >
      <MotionProvider>{children}</MotionProvider>
    </div>
  );
}
