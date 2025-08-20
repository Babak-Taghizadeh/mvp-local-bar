import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local Slow Bar | Menu",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/images/smoke.png" as="image" />
      </head>
      <body className={`font-roboto antialiased`}>{children}</body>
    </html>
  );
}
