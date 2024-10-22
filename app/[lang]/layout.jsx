import localFont from "next/font/local";
import "@/app/globals.css";
import { getDir } from "./dictionaries";
import { ThemeProvider } from "../contexts/ThemeContext";
import { TranslationProvider } from "../contexts/TranslationContext";


const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ticketing app",
  description: "a ticketing app",
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fa' }]
}

export default function RootLayout({ children, params }) {

  return (

    <html lang={params.lang} dir={getDir(params.lang)} >
      <body
        className={`
        ${geistSans.variable} ${geistMono.variable}
         antialiased`}
      >
        <ThemeProvider>
          <TranslationProvider lang={params.lang} >

            {children
            }
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
