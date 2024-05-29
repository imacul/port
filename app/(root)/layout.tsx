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
        <FloatingNav navItems={navItems} 
        />
        {children}
    </main>
  );
}
