import React from "react";

const Header = ({ goToHome }) => (
    <header className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-28">
            <img
                src={`${process.env.PUBLIC_URL}/icon.png`}
                alt="Logo"
                className="h-8"
                onClick={goToHome}
            />
            <nav className="hidden md:flex space-x-6">
                <a href="#insurance" className="text-sm font-semibold hover:underline">Insurance</a>
                <a href="#banking" className="text-sm font-semibold hover:underline">Banking</a>
                <a href="#retirement" className="text-sm font-semibold hover:underline">Retirement</a>
                <a href="#investing" className="text-sm font-semibold hover:underline">Investing</a>
                <a href="#advice" className="text-sm font-semibold hover:underline">Advice</a>
                <a href="#membership" className="text-sm font-semibold hover:underline">Membership</a>
            </nav>
        </div>
        <div className="flex items-center space-x-6">
            <button className="text-sm font-semibold hover:underline flex items-center space-x-1">
                <span>Search</span>
            </button>
            <button className="text-sm font-semibold hover:underline flex items-center space-x-1">
                <span>Chat</span>
            </button>
            <button className="text-sm font-semibold hover:underline flex items-center space-x-1">
                <span>Log On</span>
            </button>
        </div>
    </header>
);


export default Header;
