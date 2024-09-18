"use client";

import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";

const LayoutWrapper = ({ children }) => {
  const pathname = usePathname();
  
  // Check if the current route is dashboard-related
  const isDashboard = pathname.startsWith('/dashboard');
  
  return (
    <>
      {!isDashboard && <Navbar />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
};

export default LayoutWrapper;
