import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://hasankurt.com";
const FULL_NAME = "Hasan Hüseyin Kurt";
const TAGLINE = "AI & Cloud Engineer";
const DESCRIPTION =
  "Hasan Hüseyin Kurt — Final year Computer Engineering student at Bülent Ecevit University. I build AI-powered systems and deploy them on AWS using Docker and CI/CD pipelines. Focused on RAG architectures, computer vision, and cloud infrastructure.";

export const metadata: Metadata = {
  title: {
    default: `${FULL_NAME} | ${TAGLINE}`,
    template: `%s | ${FULL_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Hasan Hüseyin Kurt",
    "hasan kurt portfolio",
    "AI engineer turkey",
    "data engineer",
    "computer engineering student",
    "full stack developer",
    "RAG architecture",
    "istanbul software engineer",
    "Bülent Ecevit University",
  ],
  authors: [{ name: FULL_NAME, url: SITE_URL }],
  creator: FULL_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: FULL_NAME,
    title: `${FULL_NAME} | ${TAGLINE}`,
    description: DESCRIPTION,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${FULL_NAME} Portfolio` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${FULL_NAME} | ${TAGLINE}`,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: FULL_NAME,
              url: SITE_URL,
              jobTitle: "AI & Cloud Engineer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Bülent Ecevit University",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Zonguldak",
                addressCountry: "TR",
              },
              email: "hasankurt051@gmail.com",
              sameAs: [
                "https://github.com/hasankurtt",
                "https://linkedin.com/in/hsnkurt",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <div className="bg-zinc-950 text-zinc-50 selection:bg-zinc-800 selection:text-white">
          {children}
        </div>
      </body>
    </html>
  );
}