import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Add a state for the active link
  const [activePage, setActivePage] = useState("Home");

  return (
    <nav className="bg-gray-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-bold">Flowbite</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["Home", "About", "Services", "Pricing", "Contact"].map((page) => (
              <button
                key={page}
                className={`hover:text-gray-400 ${
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

          {/* Profile Dropdown */}
          <div>
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
                        Earnings
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

          {/* Hamburger Menu */}
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
          {["Home", "About", "Services", "Pricing", "Contact"].map((page) => (
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
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
