import React from "react";
import Navbar from "@/components/navbar";
import FloatingNavbar from "@/components/floatingBottomBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <FloatingNavbar />
    </>
  );
}
