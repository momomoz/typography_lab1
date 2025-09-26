"use client";

import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container-typography">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-semibold">Типографика</div>

          <div className="hidden md:flex space-x-8">
            <a href="/" className="nav-link font-medium">
              Медведи
            </a>
            <a href="/psychology" className="nav-link">
              Психология
            </a>
            <a href="/science" className="nav-link">
              Наука
            </a>
            <a href="/culture" className="nav-link">
              Культура
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="/" className="nav-link font-medium">
                Медведи
              </a>
              <a href="/psychology" className="nav-link">
                Психология
              </a>
              <a href="/science" className="nav-link">
                Наука
              </a>
              <a href="/culture" className="nav-link">
                Культура
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
