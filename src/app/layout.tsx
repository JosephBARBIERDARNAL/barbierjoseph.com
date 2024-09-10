import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const myfont = Open_Sans({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joseph Barbier",
  description: "Data science developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myfont.className}>{children}</body>
    </html>
  );
}
