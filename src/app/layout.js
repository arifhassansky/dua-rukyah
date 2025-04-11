import { Poppins } from "next/font/google"; // Correctly import the Poppins font
import "./globals.css";

// Set up Poppins font with weights 400 (regular) and 600 (bold)
const poppins = Poppins({
  weight: ["400", "600"], // You can add other weights if needed
  subsets: ["latin"],
  variable: "--font-poppins", // Makes the font accessible globally via CSS variable
});

export const metadata = {
  title: "Dua Ruqyah",
  description: "Learn and practice Dua Ruqyah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased px-2 md:px-4 lg:px-10 bg-[#F7F8FA]`} // Apply the font globally
      >
        {children}
      </body>
    </html>
  );
}
