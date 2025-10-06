import React from 'react';
import bannerImage from '../../assets/bannerImage.png'

const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row text-center  md:text-left md:max-w-10/12 mx-auto mt-10 bg-[#1313130d] py-10 md:py-14  gap-10 md:gap-18 rounded-xl items-center justify-center playfair-display'>
            <div>
                <p className='font-bold text-5xl mb-10'>Books to freshen up <br /> your bookshelf</p>
                <button className='bg-[#23BE0A] border-none py-5 px-7 rounded-xl  text-white font-semibold work-sans-font'>View the List</button>
            </div>
            <div>
                <img src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;