import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import getGlobals from "./api/globals";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code Purpose",
  description:
    "We develop digital solutions that make the world a better place.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await getGlobals();
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={data?.favicon?.url}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={data?.favicon?.url}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={data?.favicon?.url}
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {data && <Navbar {...data?.navbar} />}
        {children}
        {data && <Footer {...data?.footer} />}
      </body>
    </html>
  );
}
