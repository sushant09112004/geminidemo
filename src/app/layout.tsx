import "./globals.css";
import { SidebarDemo } from "@/components/demosidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
       
        {children}
        <div className="fixed left-0 top-0">
        <SidebarDemo />
        </div>
      </body>
    </html>
  );
}
