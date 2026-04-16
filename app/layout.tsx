import type { Metadata } from "next";
import MainLayout from "./components/templates/MainLayout";
import "./globals.module.css";

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
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
