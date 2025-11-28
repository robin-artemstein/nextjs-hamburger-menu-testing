// components/Navbar.tsx - FIXED VERSION
// Only showing the changed part - replace the entire Navbar.tsx with this:

"use client";

import Link from "next/link";
import { useState } from "react";
import MenuModal from "./MenuModal";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 flex">
      <div className="p-4">
        <button 
          onClick={toggleModal} 
          className="text-white text-2xl font-bold p-2 hover:bg-blue-700 rounded transition-colors"
        >
          <span>☰</span>  {/* WRAPPED IN SPAN - THIS FIXES THE ERROR */}
        </button>
      </div>
      {isModalOpen && (
        <MenuModal onClose={toggleModal} />
      )}
      <div className="p-4">
        <Link href="/" className="text-white text-2xl font-bold">
          Logo
        </Link>
      </div>
    </nav>
    
  );
}