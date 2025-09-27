import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Navbar from "./components/navBar";
import "./globals.css"; // Tailwind + global CSS

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en">
      <body className="font-geist antialiased bg-background text-foreground">
        <AntdRegistry>
          {/* Navbar */}
          <Navbar />

          {/* Main content area */}
          <main className="max-w-7xl mx-auto px-6 py-8">
            {children}
          </main>
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
