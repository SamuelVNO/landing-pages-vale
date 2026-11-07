import type { Metadata, Viewport } from "next";
import { Toaster } from "@/components/ui/sonner";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Landing pages para negócios locais · Vale do Paraíba",
    template: "%s",
  },
  description:
    "Três landing pages de conversão para negócios locais do Vale do Paraíba: oficina mecânica, clínica odontológica e escritório de advocacia.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
