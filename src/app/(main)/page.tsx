import type { Metadata } from "next";
import { OceanOfferPage } from "@/components/landing/OceanOfferPage";

export const metadata: Metadata = {
  title: "Bomba de Banho Surpresa Oceano — Oferta Especial | Toy Pix",
  description:
    "Página oficial da Bomba de Banho Surpresa Oceano: kits com melhor custo-benefício, frete grátis, compra segura e entrega rastreada.",
};

export default function HomePage() {
  return <OceanOfferPage />;
}
