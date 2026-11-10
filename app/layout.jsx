import "./globals.css";
import { profile } from "@/data/portfolio";

export const metadata = {
  title: `${profile.name} | Machine Learning Engineer, Computer Vision & NLP`,
  description: profile.description,
  openGraph: {
    title: `${profile.name}, Machine Learning Engineer`,
    description: "Research paper reproductions, from-scratch Transformers, and reproducible ML pipelines.",
    type: "website",
  },
};

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: profile.email,
  address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
  alumniOf: "Egyptian E-Learning University",
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </body>
    </html>
  );
}
