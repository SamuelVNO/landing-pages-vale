import { MotionProvider } from "@/components/shared/motion-provider";
import { fontBody, fontCode, fontDisplay } from "@/components/oficina/fonts";
import "./theme.css";

export default function OficinaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`theme-oficina ${fontBody.variable} ${fontDisplay.variable} ${fontCode.variable} relative min-h-screen overflow-x-clip bg-background font-sans text-foreground antialiased`}
    >
      <MotionProvider>{children}</MotionProvider>
    </div>
  );
}
