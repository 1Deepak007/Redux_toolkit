import { useState } from "react";
import { Link } from "react-router-dom";
import { FaStore, FaBars, FaTimes, FaHome, FaList, FaShoppingCart } from "react-icons/fa"; // Import icons


const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4 sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-white font-bold text-xl flex items-center">
                    <FaHome className="mr-2" /> {/* Home icon */}
                    Redux Toolkit
                </Link>

                {/* Dropdown Menu */}
                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="text-white hover:text-gray-300 focus:outline-none flex items-center"
                    >
                        {isDropdownOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />} {/* Toggle between bars and close icon */}
                    </button>

                    {/* Dropdown Content */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg z-10 transform transition-all duration-300 ease-in-out">
                            <div className="py-1">
                                <Link to="/" className="block px-4 py-2 text-sm text-white hover:bg-gray-600 flex items-center" onClick={() => setIsDropdownOpen(false)}>
                                    <FaHome className="mr-2" /> {/* Counter icon */}
                                    Counter
                                </Link>
                                <Link to="/todos" className="block px-4 py-2 text-sm text-white hover:bg-gray-600 flex items-center" onClick={() => setIsDropdownOpen(false)}>
                                    <FaList className="mr-2" /> {/* Todos icon */}
                                    Todos
                                </Link>
                                <Link to="/product" className="block px-4 py-2 text-sm text-white hover:bg-gray-600 flex items-center" onClick={() => setIsDropdownOpen(false)} >
                                    <FaShoppingCart className="mr-2" /> {/* Products icon */}
                                    Products
                                </Link>
                                <Link to="/dmart" className="block px-4 py-2 text-sm text-white hover:bg-gray-600 flex items-center" onClick={() => setIsDropdownOpen(false)}>
                                    <FaStore className="mr-2" /> {/* D-Mart icon */}
                                    D-Mart
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;