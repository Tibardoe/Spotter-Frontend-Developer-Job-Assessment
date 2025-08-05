import Header from "@/components/Header";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.className} bg-headerBg`}>
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
