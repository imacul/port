import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative  flex justify-center bg-black-100 items-center overflow-hidden mx-auto sm:px-10 px-5">
       <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        {children}
        <Footer />
      </div>
    </main>
  );
}
