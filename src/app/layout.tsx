import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local Slow Bar | Menu",
  description: "",
};

const roboto = localFont({
  src: "../../public/fonts/Roboto.ttf",
  variable: "--font-roboto",
  weight: "400",
  display: "swap",
});


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
      <body
        className={`${roboto.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
