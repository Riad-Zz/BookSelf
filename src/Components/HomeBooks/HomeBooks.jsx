import React, { Suspense } from 'react';
import AllHomeBooks from '../AllHomeBooks/AllHomeBooks';
import { HashLoader } from 'react-spinners';

const HomeBooks = () => {
    const bookPromise = fetch('./booksData.json').then(res => res.json());
    return (
        <div className='max-w-10/12 mx-auto mt-20'>
            <p className='playfair-display text-center font-bold text-3xl mb-10'>Books</p>
            <Suspense fallback={<div className='flex justify-center items-center' ><HashLoader
                color="#729f65"
                size={30}
                speedMultiplier={1}
            /></div>}>
                <AllHomeBooks bookPromise={bookPromise}></AllHomeBooks>
            </Suspense>
        </div>
    );
};

export default HomeBooks;