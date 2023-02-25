import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";


const Header = () => {
    return (
        <header className='bg-red py-4'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    {/* header logo start */}
                <div>
                    <h3 className='font-bold text-lg'>Maktabatul Amjad</h3>
                </div>
                {/* header logo end */}
                {/* header menu start */}
                <div className='flex'>
                    <Link to="" className='font-semibold text-base text-white px-2 hover:text-gray'>Home</Link>
                    <Link to="" className='font-semibold text-base text-white px-2 hover:text-gray'>Books</Link>
                    <Link to="" className='font-semibold text-base text-white px-2 hover:text-gray'>Authors</Link>
                    <Link to="" className='font-semibold text-base text-white px-2 hover:text-gray'>About</Link>
                    <Link to="" className='font-semibold text-base text-white px-2 hover:text-gray'>Contact</Link>
                </div>
                {/* header menu end */}
                {/* header searchbar start */}
                <div className='relative w-[240px] h-8 bg-white'>
                    <input className='absolute top-0 left-0 h-full w-full pl-5 focus:outline-none' placeholder='Search...'/>
                    <button className='absolute top-2 right-3 cursor hover:text-red'><FaSearch/></button>
                </div>
                {/* header searchbar end */}
                </div>
            </div>
        </header>
    );
};

export default Header;