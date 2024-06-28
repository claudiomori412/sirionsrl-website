import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sirion",
  description: "Sirion Srl è un'azienda leader nel settore dell'illuminazione per il mercato automobilistico, specializzata nello stampaggio plastico ad iniezione. Offriamo un servizio completo, dalla progettazione alla realizzazione del componente finale, garantendo qualità e affidabilità in ogni fase del processo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  );
}
