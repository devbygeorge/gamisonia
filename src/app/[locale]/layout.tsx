import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.scss";
import { Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/SrollToTop";
import { CategoriesContextProvider } from "@/context/categories.context";

const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

export const metadata = {
  title: "GAMISONIA Design Studio",
  description:
    '"Discover exceptional interior and furniture designs by GAMISONIA Design Studio.',
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const intlLocale = useLocale();
  const t = useTranslations("Index");

  // Show a 404 error if the user requests an unknown locale
  if (locale !== intlLocale) {
    notFound();
  }

  return (
    <html lang={intlLocale}>
      <body className={poppins.className}>
        <ScrollToTop />
        <Header />
        <CategoriesContextProvider>{children}</CategoriesContextProvider>
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
