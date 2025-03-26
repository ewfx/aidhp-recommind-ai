import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, fullWidth = false }) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      <main className={`w-full ${fullWidth ? "px-4" : "container mx-auto px-4"}`}>
        <div className={`${fullWidth ? "w-full" : "max-w-7xl mx-auto"}`}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
