import "@/css/app.css";
import "@/css/site.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pro Links",
  description: "Plataforma de compartilhamento de links",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt_BR">
      <body>{children}</body>
    </html>
  );
}
