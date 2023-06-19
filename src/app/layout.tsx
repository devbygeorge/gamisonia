import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.scss";
import { Poppins } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

export const metadata = {
  title: "GAMISONIA Design Studio",
  description:
    '"Discover exceptional interior and furniture designs by GAMISONIA Design Studio.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
