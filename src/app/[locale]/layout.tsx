import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.scss";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/SrollToTop";
import { CategoriesContextProvider } from "@/context/categories.context";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

// Font files can be colocated inside of `app`
const firago = localFont({
  src: "./Firago.otf",
  display: "swap",
  variable: "--font-firago",
});

const aquire = localFont({
  src: "./Aquire.otf",
  display: "swap",
  variable: "--font-aquire",
});

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
  const messages = useMessages();

  // Show a 404 error if the user requests an unknown locale
  if (locale !== intlLocale) {
    notFound();
  }

  return (
    <html
      lang={intlLocale}
      className={`${poppins.variable} ${firago.variable} ${aquire.variable}`}
    >
      <body>
        <ScrollToTop />
        <NextIntlClientProvider locale={intlLocale} messages={messages}>
          <Header />
          <CategoriesContextProvider>{children}</CategoriesContextProvider>
          <Footer />
        </NextIntlClientProvider>
      </body>
      <Analytics />
    </html>
  );
}
