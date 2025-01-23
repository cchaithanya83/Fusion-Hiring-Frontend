import { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <nav className="bg-gray-200 text-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-bold">LOGO</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {[
              "Dashboard",
              "Manage Jobs",
              "Talent Pool",
              "Resume",
              "Reports",
            ].map((page) => (
              <button
                key={page}
                className={`hover:text-gray-600 ${
                  activePage === page
                    ? "border-b-2 border-gray-800 text-gray-800"
                    : "text-gray-600"
                }`}
                onClick={() => setActivePage(page)}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="bg-gray-300 px-4 py-2 rounded text-gray-800 hover:bg-gray-400">
              In Progress Candidates
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
              Create Job
            </button>
          </div>

          {/* Profile Dropdown and Icons */}
          <div className="flex items-center space-x-4">
             <button className="text-gray-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 4.5C6.5 4.5 4.5 7 4.5 9.5c0 2.5 2 5 6.5 5s6.5-2.5 6.5-5C17.5 7 15.5 4.5 11 4.5zM19.5 19.5l-4.5-4.5"
                />
              </svg>
            </button>

            <button className="text-gray-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 22c1.104 0 2-.896 2-2H10c0 1.104.896 2 2 2zM19 17V9c0-3.314-2.686-6-6-6s-6 2.686-6 6v8l-2 2v1h16v-1l-2-2z"
                />
              </svg>
            </button>

            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center space-x-2">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://via.placeholder.com/32"
                  alt="Profile"
                />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-gray-100 rounded-md shadow-lg">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 ${
                          active ? "bg-gray-200 text-gray-800" : "text-gray-600"
                        }`}
                      >
                        Dashboard
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 ${
                          active ? "bg-gray-200 text-gray-800" : "text-gray-600"
                        }`}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 ${
                          active ? "bg-gray-200 text-gray-800" : "text-gray-600"
                        }`}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {["Dashboard", "Manage Jobs", "Talent Pool", "Resume", "Reports"].map(
            (page) => (
              <button
                key={page}
                className={`block w-full px-3 py-2 text-left text-base font-medium ${
                  activePage === page
                    ? "border-b-2 border-gray-800 text-gray-800"
                    : "text-gray-600"
                } hover:bg-gray-300`}
                onClick={() => {
                  setActivePage(page);
                  setMobileMenuOpen(false); // Close mobile menu after clicking
                }}
              >
                {page}
              </button>
            )
          )}
          <button className="block w-full px-3 py-2 text-left text-base font-medium text-gray-600 hover:bg-gray-300">
            In Progress Candidates
          </button>
          <button className="block w-full px-3 py-2 text-left text-base font-medium text-gray-600 hover:bg-gray-300">
            Create Job
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
