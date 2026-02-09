import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vikas Meshram - Official portfolio website",
  description:
    "Explore my professional portfolio showcasing projects, skills, and experience in web development and software engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark antialiased`}>{children}</body>
    </html>
  );
}
