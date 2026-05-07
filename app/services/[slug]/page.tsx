import { services } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ServicePageContent from "./ServicePageContent";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Maçonnerie 70 Père & Fils`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Maçonnerie 70`,
      description: service.description,
      locale: "fr_FR",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  return <ServicePageContent service={service} />;
}
