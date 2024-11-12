import React from 'react';

export const Navbar: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-teal-800">
            <div className="container flex h-16 items-center px-8 w-full">
                <a className="flex items-center justify-center gap-2" href="#">
                    <img src='/playDay.png' className='w-[60px]' alt='logo'/>
                    <p className='text-2xl text-gray-50 font-semibold'>PlayDay</p>
                </a>
                <nav className="flex gap-6 w-full items-center place-content-end">
                    <a className="text-sm font-medium text-white hover:text-gray-200" href="#">
                        Home
                    </a>
                    <a className="text-sm font-medium text-white hover:text-gray-200" href="#">
                        About Us
                    </a>
                    <a className="text-sm font-medium text-white hover:text-gray-200" href="#">
                        Fields
                    </a>
                    <a className="text-sm font-medium text-white hover:text-gray-200" href="#">
                        Games
                    </a>
                    <button className="bg-teal-100 text-teal-900 hover:bg-teal-200 font-bold p-2 rounded">
                        Get Started
                    </button>
                </nav>
            </div>
        </header>
    )
}