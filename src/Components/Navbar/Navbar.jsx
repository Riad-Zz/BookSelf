import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='md:max-w-10/12 mx-auto py-2 flex flex-col gap-2 md:flex-row justify-between items-center'>
            <div className='font-bold text-2xl text-black'>BookSelf</div>
            <div className='flex gap-5 md:gap-7 items-center justify-center flex-col md:flex-row'>
                <NavLink to={'/'} className={({isActive})=>(isActive ? "active" : "not-active")}>Home</NavLink>
                <NavLink to={'/listed'} className={`text-lg text-[#131313cc]`}>Listed Books</NavLink>
                <NavLink to={'/else'} className={`text-lg text-[#131313cc]`}>Pages to Read</NavLink>
            </div>
            <div className='gap-2 hidden md:flex'>
                <button className='bg-[#23BE0A] text-white px-7 py-3 rounded-xl font-semibold'>Log In</button>
                <button className='bg-[#59C6D2] text-white px-7 py-3 rounded-xl font-semibold'>Sign Up</button>
                
            </div>
        </div>
    );
};

export default Navbar;<h1>This is Navabar</h1>