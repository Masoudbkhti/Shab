import ClientProviderTheme from "./ClientProviderTheme";
import ClientProvider from "./ClientProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "سایت شب | اجاره ویلا و سوئیت در شمال و... | ۱۰۰٪ تمیز و امن",
  description: "سایت شب اجاره ویلا و سوئیت به قیمت ارزان و پشتیبانی ۲۴ ساعته.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClientProviderTheme>
        <body className={inter.className}>
          <ClientProvider>{children}</ClientProvider>
        </body>
      </ClientProviderTheme>
    </html>
  );
}
