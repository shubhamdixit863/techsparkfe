import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQAccordion from "./components/FAQAccordion";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eduyogi",
  description: "Eduyogi Education Website ,Mern stack,dsa ,software ,pay after placement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        {children}
        {/* <FAQAccordion /> */}
        <Footer/>
        </body>
    </html>
  );
}
