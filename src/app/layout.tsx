'use client'
import { usePathname } from 'next/navigation';
import SidebarDesign from "@/components/ui/SidebarDesign";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="antialiased flex">
        {/* Conditionally render the sidebar, hide on homepage */}
        {pathname !== '/' && (
          <div className="fixed left-0 top-0 h-full w-[350px] bg-gray-100">
            <SidebarDesign />
          </div>
        )}
        {/* Main content area */}
        <div className={pathname !== '/' ? "ml-[350px] w-full" : "w-full"}>
          {children}
        </div>
      </body>
    </html>
  );
}
