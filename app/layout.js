import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
// Import Poppins
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", // Optional for Tailwind
});
export const metadata = {
  title: "Dextersol Page By Iqra Fatima",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins scroll-smooth">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
