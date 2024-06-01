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
    <main>
       <FloatingNav navItems={navItems} />
        {children}
      <div className="relative bg-black-100 flex justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
       <div className="max-w-7xl w-full">
        <Footer />
      </div>
      </div>
    </main>
  );
}
