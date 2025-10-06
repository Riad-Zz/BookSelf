import React from 'react';

const BookTags = ({tag}) => {
    return (
        <div>
            <p className='text-[#23BE0A] font-semibold bg-[#23be0a0d] py-1.5 px-4 rounded-xl'>#{tag}</p>
        </div>
    );
};

export default BookTags;