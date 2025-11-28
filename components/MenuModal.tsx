// components/MenuModal.tsx
// This is the modal that appears when hamburger is clicked.
// It shows links to other pages and closes when clicking outside.

"use client";  // Client Component for events

import Link from "next/link";  // For routing
import { useEffect, useRef } from "react";  // For handling outside clicks

interface MenuModalProps {
  onClose: () => void;  // Function to close the modal (passed from Navbar)
}

export default function MenuModal({ onClose }: MenuModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);  // Ref to track the modal element

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If click is outside the modal, close it
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();  // Call the close function
      }
    };

    document.addEventListener("mousedown", handleClickOutside);  // Listen for clicks on the whole page
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);  // Clean up listener when component unmounts
    };
  }, [onClose]);  // Run this effect when onClose changes

  return (
    <div
      ref={modalRef}  // Attach ref to this div
      className="absolute top-16 left-4 bg-white shadow-lg p-4 rounded-md"  // Position in top-left, styled with Tailwind
    >
      <ul className="space-y-2">  {/* List of links with spacing */}
        <li>
          <Link href="/about" onClick={onClose} className="text-blue-600 hover:underline">  {/* Link to About, close modal on click */}
            About
          </Link>
        </li>
        <li>
          <Link href="/pricing" onClick={onClose} className="text-blue-600 hover:underline">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/customisation" onClick={onClose} className="text-blue-600 hover:underline">
            Customisation
          </Link>
        </li>
        <li>
          <Link href="/buy" onClick={onClose} className="text-blue-600 hover:underline">
            Buy
          </Link>
        </li>
      </ul>
    </div>
  );
}