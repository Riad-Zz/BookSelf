import React from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import { useLoaderData, useNavigate, useParams } from 'react-router';
import BookTags from './BookTags';
import { setListedBook, setWishListed } from '../../Utilities.jsx/LocalData';

const BookDetails = () => {
    const navigate = useNavigate() ;
    const allData = useLoaderData() ;
    // console.log(allData) ;
    const id = parseInt( useParams().id) ; //Param provides a object so , from id object -> .id then we parse it in integer 
    const currentCard = allData.find(data => data.bookId === id) ;
    const alltags = currentCard.tags ;
    // console.log(currentCard) ;
    // console.log(currentCard.review) ;
    //setListedBook
    const handleMarkAsRead = (id) => {
        setListedBook(id) ;
    }
    const handleWished = (id) =>{
        setWishListed(id) ;
    }
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between gap-12 items-center max-w-10/12 mx-auto mt-20 '>
                <div className='flex-1'>
                    <img src={currentCard.image} className='bg-[#F3F3F3] rounded-xl py-14 px-16' />
                </div>
                <div className='flex-2'>
                    <p className='playfair-display font-bold text-5xl'>{currentCard.bookName}</p>
                    <p className='text-[#131313cc] text-lg my-4'>By : {currentCard.author}</p>
                    <hr className=' border-t-[#13131326] mb-3' />
                    <p className='text-[#131313cc] font-semibold '>{currentCard.category}</p>
                    <hr className=' border-t-[#13131326] my-3' />
                    <p className=''><span className='font-bold'>Review : </span>{currentCard.review}</p>
                    <div className='flex items-center gap-4 my-4'><span className='font-bold text-black'>Tag : </span>
                        {
                            alltags.map(tag => <BookTags key={currentCard.category} tag={tag}></BookTags>)
                        }
                    </div>
                    <hr className=' border-t-[#13131326] my-3' />
                    <div className='font-bold flex gap-6'>
                        <div className='text-[#131313b3] font-normal'>Number of Pages : </div>
                        <div>{currentCard.totalPages}</div>
                    </div>
                    <div className='font-bold flex gap-6 my-3'>
                        <div className='text-[#131313b3] font-normal'>Publisher : </div>
                        <div>{currentCard.publisher}</div>
                    </div>
                    <div className='font-bold flex gap-6 my-3'>
                        <div className='text-[#131313b3] font-normal'>Year of Publishing : </div>
                        <div>{currentCard.yearOfPublishing}</div>
                    </div>
                    <div className='font-bold flex gap-6 my-3'>
                        <div className='text-[#131313b3] font-normal'>Rating : </div>
                        <div>{currentCard.rating}</div>
                    </div>

                    <div className='flex justify-center md:justify-start gap-4 mt-8'>
                        <button onClick={() => handleMarkAsRead(currentCard.bookId)} className='font-bold border rounded-xl py-4 px-8 cursor-pointer'>Mark as Read</button>
                        <button onClick={() => handleWished(currentCard.bookId)} className='font-semibold  rounded-xl py-4 px-6 bg-[#50B1C9] text-white cursor-pointer'>WishList</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
            <button onClick={()=>navigate(-1)} className ="bg-[#23BE0A] px-7 py-4 rounded-xl text-white font-semibold mt-10 flex items-center gap-4 cursor-pointer"> <IoArrowBackSharp />Go Back</button>
            </div>
        </div>

    );
};

export default BookDetails;