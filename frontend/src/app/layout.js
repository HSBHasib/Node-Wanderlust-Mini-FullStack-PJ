import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { BookingProvider } from "@/components/context/BookingContext";

export const metadata = {
  title: "Wanderlust",
  description: "This is my first mini fullstack fully designed website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <BookingProvider>
          <Navbar />
          {children}
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
