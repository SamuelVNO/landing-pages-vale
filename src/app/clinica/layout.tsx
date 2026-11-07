import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { MotionProvider } from "@/components/shared/motion-provider";
import "./theme.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-display",
});

const body = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

export default function ClinicaLayout({ children }: LayoutProps<"/clinica">) {
  return (
    <div
      className={`theme-clinica ${display.variable} ${body.variable} min-h-screen overflow-x-clip bg-background font-sans text-foreground`}
    >
      <MotionProvider>{children}</MotionProvider>
    </div>
  );
}
