import React from 'react';

import { CiLocationOn } from "react-icons/ci";
import { MdPeopleAlt } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { Link } from 'react-router';
import BooksTag from './BooksTag';
const ListBookCard = ({item}) => {
    const id = item.bookId ;
    const allTags = item.tags ; 
    return (
        <div className='flex flex-col text-center md:text-left md:flex-row gap-6 items-center border border-[#13131326] rounded-xl p-4 mt-4'>

            <img src={item.image} alt="" className='w-auto  object-cover bg-[#1313130d] rounded-xl py-6 px-9 h-56' />
            <div className='flex-1'>
                <p className='playfair-display font-bold text-2xl'>{item.bookName}</p>
                <p className='text-[#131313cc] text-lg my-4'>By : {item.author}</p>
                <div className='flex items-center gap-3 flex-col md:flex-row justify-center md:justify-start'>
                    <div className='font-bold'>Tag :</div>
                    <div className='flex gap-4 items-center'>
                        {
                            allTags.map(tag => <BooksTag key={item.bookId} tag={tag}></BooksTag>)
                        }
                    </div>
                    <div className='flex items-center gap-3 text-[#131313cc] flex-wrap'><CiLocationOn /> Year of Publishing: {item.yearOfPublishing}</div>

                </div>

                <div className='flex items-center gap-5 mt-3 text-[#131313cc] flex-wrap'>
                    <div className='flex items-center gap-3 mt-2'>
                         <MdPeopleAlt />
                        <p>Publisher : {item.publisher}</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaBookOpen />
                        <p> Page {item.totalPages}</p>
                    </div>
                </div>
                <hr className=' border-t-[#13131326] my-3 w-full' />
                <div className='flex gap-4 flex-wrap justify-center md:justify-start'>
                    <button className='bg-[#328eff26] text-[#328EFF] py-3 px-5 rounded-2xl cursor-pointer'>Category : {item.category}</button>
                    <button className='bg-[#ffac3326] text-[#FFAC33] py-3 px-5 rounded-2xl cursor-pointer'>Rating : {item.rating}</button>
                    <Link to={`/Details/${id}`}>
                    <button className='bg-[#23BE0A] text-white py-3 px-5 rounded-2xl cursor-pointer'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ListBookCard;