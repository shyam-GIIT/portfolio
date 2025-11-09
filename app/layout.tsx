import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shyam Kumar Chandru Y - Portfolio",
  description: "Portfolio of Shyam Kumar Chandru Y - Developer passionate about creating innovative solutions and building meaningful projects.",
  keywords: ["portfolio", "developer", "web developer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Shyam Kumar Chandru Y" }],
  openGraph: {
    title: "Shyam Kumar Chandru Y - Portfolio",
    description: "Portfolio of Shyam Kumar Chandru Y - Developer passionate about creating innovative solutions",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}

