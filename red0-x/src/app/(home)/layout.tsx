import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "../globals.css";

const mona = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "red0xx's Site",
  description: "My personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mona.variable} antialiased bg-cover bg-center bg-no-repeat bg-fixed bg-[url(/static/wallpaper/background4.png)]`}

      >
        {children}
      </body>
    </html>
  );
}
