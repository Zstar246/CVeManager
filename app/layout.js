import { Inter } from "next/font/google";
import "@/styles/globals.css";
import  {ToastContainer}  from './next-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CVEManager",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-red-900 to-zinc-950  text-white">
        {children}
        <ToastContainer/>
      </body>
    </html>
  );
}
