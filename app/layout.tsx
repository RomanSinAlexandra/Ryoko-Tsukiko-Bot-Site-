import type { Metadata } from "next";
import Image from "next/image";
import Header from "./components/templates/Header/header";
import Footer from "./components/templates/Footer/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryoko Tsukiko",
  description: "Ryoko Tsukiko site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="background">
          <Image
            src="/Ryoko-Tsukiko-Bot-Site-/Megaten.svg"
            alt="Pentagram"
            fill
            className="bgImage"
          />
        </div>
          <Header />
            {children}
          <Footer />
      </body>
    </html>
  );
}


