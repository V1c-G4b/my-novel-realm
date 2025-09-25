"use client";

import { useAuth } from "@/_lib/hooks/useAuth";
import { useAuthStore } from "@/_lib/stores/authModalStore";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SearchIcon = () => (
  <svg
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const { openModal, logout } = useAuthStore();

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="dark:filter dark:invert"
                />
              </Link>
            </div>

            <nav className="hidden md:flex space-x-6">
              <Link
                href="/Novels"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
              >
                Novels
              </Link>

              <Link
                href="/Novels"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
              >
                Favorites
              </Link>
              <Link
                href="/Novels"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
              >
                Discover
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Link
                href="/publish"
                className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 text-sm font-semibold"
              >
                Publish
              </Link>
              {isAuthenticated ? (
                <button
                  onClick={logout}
                  className="border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-semibold"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => openModal("login")}
                  className="border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-semibold"
                >
                  Login
                </button>
              )}

              <button className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white p-2">
                <SearchIcon />
              </button>
            </div>

            <div className="md:hidden">
              <button
                className="text-gray-600 dark:text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900">
          <div className="flex flex-col space-y-2 px-4 pt-2 pb-4">
            <Link
              href="/Novels"
              className="px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Novels
            </Link>

            <Link
              href="/Favorites"
              className="px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Favorites
            </Link>

            <Link
              href="/Discover"
              className="px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Discover
            </Link>

            <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
            <Link
              href="/publish"
              className="px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Publish
            </Link>
            <Link
              href="/login"
              className="px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
