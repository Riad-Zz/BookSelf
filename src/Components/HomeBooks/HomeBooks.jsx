import React, { Suspense } from 'react';
import AllHomeBooks from '../AllHomeBooks/AllHomeBooks';

const HomeBooks = () => {
    const bookPromise = fetch('./booksData.json').then(res => res.json()) ;
    return (
        <div className='max-w-10/12 mx-auto mt-20'>
            <p className='playfair-display text-center font-bold text-3xl mb-10'>Books</p>
            <Suspense fallback={<div>Loading....</div>}>
                <AllHomeBooks bookPromise={bookPromise}></AllHomeBooks>
            </Suspense>
        </div>
    );
};

export default HomeBooks;