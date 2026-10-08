import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGOM Multi Global Service NG LTD",
  description:
    "Travel, tourism and global services. Your Journey, Our Priority.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}