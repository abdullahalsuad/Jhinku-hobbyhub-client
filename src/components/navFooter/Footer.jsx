import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiGithub,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#00224D] text-white pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3 text-[#C68EFD]">
              Jhinku Hobby Hub
            </h3>
            <p className="text-gray-300 text-sm">
              Connecting people through shared passions. Build your tribe today.
            </p>
            <div className="flex space-x-4 mt-4 text-[#C68EFD]">
              <a href="#" className="hover:text-[#C68EFD] transition">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="hover:text-[#C68EFD] transition">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="hover:text-[#C68EFD] transition">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="hover:text-[#C68EFD] transition">
                <FiGithub size={20} />
              </a>
              <a href="#" className="hover:text-[#C68EFD] transition">
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#C68EFD] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C68EFD] transition">
                  All Groups
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C68EFD] transition">
                  Create Group
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C68EFD] transition">
                  My Groups
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#C68EFD] transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest hobby group updates straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-[#1E2A3A] border border-[#C68EFD] rounded-md focus:outline-none w-full"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#C68EFD] hover:bg-[#1f5490] rounded-md transition text-white cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[#3C424B] text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Jhinku Hobby Hub. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
