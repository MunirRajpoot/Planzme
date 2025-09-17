"use client"; // 👈 needed if you’re using Next.js App Router
import Image from "next/image";
import { FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import React from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-6 py-3 bg-[#D9D9D9] text-black relative">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <Image src="/logo/logo.png" alt="logo" height={40} width={40} />
                <span className="text-lg font-bold">Planzme</span>
            </div>

            {/* Links */}
            <ul className="flex gap-6 items-center">
                {/* Tools with Dropdown */}
                <li className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="cursor-pointer hover:text-gray-700 flex items-center justify-center gap-1"
                    >
                        Tools
                        <IoIosArrowDown className="mt-1" />
                    </button>

                    {isOpen && (
                        <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tool 1</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tool 2</li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tool 3</li>
                        </ul>
                    )}
                </li>

                <li className="cursor-pointer">Pricing</li>
                <li className="cursor-pointer">Docs</li>
                <li className="cursor-pointer">Blogs</li>
                <li>
                    <button className="flex justify-center items-center gap-1 bg-white px-3 py-1 rounded-lg cursor-pointer">
                        <FiUser />
                        Sign In
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
