// app/layout.tsx
// This is the root layout that wraps every page. It includes the Navbar and sets up HTML structure.
// Think of it as the "frame" for your entire site.

import type { Metadata } from "next";  // For setting page metadata like title
import "./globals.css";  // Import global styles
import Navbar from "@/components/Navbar";  // Import the Navbar component

export const metadata: Metadata = {
  title: "My Website",  // Default page title
  description: "A simple website with Next.js and Tailwind",  // Default description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;  // The content of each page goes here
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">  {/* Basic background color using Tailwind */}
        <Navbar />  {/* Include the Navbar on every page */}
        <main className="container mx-auto p-4">  {/* Main content area, centered with padding */}
          {children}  {/* This is where page-specific content is inserted */}
        </main>
      </body>
    </html>
  );
}