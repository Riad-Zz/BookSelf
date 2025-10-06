import React, { use } from 'react';
import BookCard from '../BookCard/BookCard';

const AllHomeBooks = ({bookPromise}) => {
    const allBooks = use(bookPromise) ;
    // console.log(allBooks) ;
    return (
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-auto-rows-[1fr]'>
            {/* <BookCard></BookCard>
            <BookCard></BookCard>
            <BookCard></BookCard> */}
            {
                allBooks.map(book => <BookCard key={book.bookId} book ={book}></BookCard>)
            }
        </div>
    );
};

export default AllHomeBooks;