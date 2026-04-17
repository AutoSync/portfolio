import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erick Andrade | Desenvolvedor Full Stack",
  description:
    "Portfólio de Erick Andrade — projetos, arquitetura e soluções de software.",
  openGraph: {
    title: "Erick Andrade | Desenvolvedor Full Stack",
    description: "Projetos, arquitetura e soluções de software por Erick Andrade.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen overflow-x-hidden">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
