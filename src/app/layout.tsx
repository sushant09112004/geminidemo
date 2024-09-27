import SidebarDesign from "@/components/ui/SidebarDesign";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex">
        {/* Sidebar on the left */}
        <div className="fixed left-0 top-0 h-full w-[350px]"> {/* Sidebar width */}
          <SidebarDesign />
        </div>
        {/* Main content area */}
        <div className="ml-[350px] w-full"> {/* Margin-left to leave space for the sidebar */}
          {children}
        </div>
      </body>
    </html>
  );
}
