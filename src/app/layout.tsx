import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "@/styles/globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Toy Pix — Brinquedos com Pix",
    template: "%s | Toy Pix",
  },
  description:
    "Brinquedos selecionados, checkout Pix e voucher digital. Entrega sem complicação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} ${fredoka.variable}`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
