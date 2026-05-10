import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Wanderlust",
  description: "This is my first mini fullstack fully designed website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
