import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krishna Dobariya | Senior MERN Stack Developer | Full-Stack Engineer",
  description:
    "Krishna Dobariya is a full-stack developer with 5+ years of experience building production-ready web applications using Node.js, React.js, MongoDB, MySQL, Next.js, AWS and modern cloud technologies.",
  keywords: [
    "Krishna Dobariya",
    "Senior MERN Stack Developer",
    "Full-Stack Engineer",
    "Node.js Developer",
    "React.js Developer",
    "Next.js Developer",
    "Backend Architecture",
    "MongoDB",
    "MySQL",
    "Fintech Web Developer",
    "SaaS Engineer",
    "AWS",
    "DigitalOcean"
  ],
  authors: [{ name: "Krishna Dobariya", url: "https://www.linkedin.com/in/krishna-d-485593212/" }],
  creator: "Krishna Dobariya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.linkedin.com/in/krishna-d-485593212/",
    title: "Krishna Dobariya | Senior MERN Stack Developer | Full-Stack Engineer",
    description:
      "5+ years of experience building scalable, production-ready digital products across fintech, SaaS, e-commerce, AI, and real-time systems.",
    siteName: "Krishna Dobariya Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Dobariya | Senior MERN Stack Developer",
    description:
      "5+ years of experience building scalable, production-ready digital products across fintech, SaaS, e-commerce, AI, and real-time systems."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#060913" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  );
}
