import React from 'react';
// import bookImage from '../../assets/bannerImage.png'
import star from '../../assets/star.svg'
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    // const {bookName,author,image,rating,category} = bookId ; 
    console.log(book);
    return (
        <Link to="/Details">
            <div className='border border-[#13131326] p-6 rounded-2xl cursor-pointer'>
                <img src={book.image} alt="" className='bg-[#F3F3F3] rounded-2xl px-14 xl:px-20 2xl:px-32 py-8 xl:object-cover xl:aspect-[4/3]' />
                <div className='flex my-3 gap-5'>
                    <p className='text-[#23BE0A] font-semibold bg-[#23be0a0d] py-1.5 px-4 rounded-xl'>Young Adult</p>
                    <p className='text-[#23BE0A] font-semibold bg-[#23be0a0d] py-1.5 px-4 rounded-xl'>Young Adult</p>

                </div>
                <p className='playfair-display font-bold text-2xl'>{book.bookName}</p>
                <p className='text-[#131313cc] text-lg my-4'>By : {book.author}</p>
                <hr className="border-t-2 border-dashed border-[#13131326] my-5" />
                <div className='flex justify-between mt-2'>
                    <p>{book.category}</p>
                    <div className='flex gap-4 items-center'>
                        <p>{book.rating}</p>
                        <img src={star} />
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default BookCard;