import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Hotel-Booking",
  description: "Hotel-Booking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Mont.className}>
      <Header />
      
      {children}
      <Footer />
      </body>
    </html>
  );
}
