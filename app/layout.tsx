import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://app.gradelab.io'),
  title: "GradeLab - AI-Powered Education Assessment Platform",
  description: "AI-powered educational assessment platform for teachers to create and evaluate tests with advanced analytics.",
  authors: [{ name: "GradeLab" }],
  keywords: ["AI grading", "educational assessment", "teacher tools", "automated grading", "test evaluation", "education technology"],
  openGraph: {
    title: "GradeLab - AI-Powered Education Assessment Platform",
    description: "AI-powered educational assessment platform for teachers to create and evaluate tests with advanced analytics.",
    type: "website",
    url: "https://app.gradelab.io",
    siteName: "GradeLab",
    images: [
      {
        url: "https://gradelab.io/assets/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "GradeLab - AI-Powered Education Assessment Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@gradeLab",
    images: ["https://gradelab.io/assets/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
