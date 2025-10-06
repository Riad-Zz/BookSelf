import React from 'react';
import bookImage from '../../assets/bannerImage.png'
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from 'react-router';

const BookDetails = () => {
    const navigate = useNavigate() ;
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between gap-12 items-center max-w-10/12 mx-auto mt-20 '>
                <div className=''>
                    <img src={bookImage} className='bg-[#F3F3F3] rounded-xl py-20 px-16 flex-1' />
                </div>
                <div className='flex-1'>
                    <p className='playfair-display font-bold text-5xl'>The Catcher in the Rye</p>
                    <p className='text-[#131313cc] text-lg my-4'>By : Awlad Hossain</p>
                    <hr className=' border-t-[#13131326] mb-3' />
                    <p className='text-[#131313cc] font-semibold '>Fiction</p>
                    <hr className=' border-t-[#13131326] my-3' />
                    <p className=''><span className='font-bold'>Review : </span>Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec accumsan euismod nulla adipiscing lectus. Morbi elementum a auctor erat diam tellus. Fermentum faucibus nulla enim ornare.
                        Id neque neque pretium enim platea urna non dictum. Faucibus dignissim ridiculus nibh tristique massa non.</p>
                    <div className='flex items-center gap-4 my-4'><span className='font-bold text-black'>Tag : </span>
                        <p className='text-[#23BE0A] font-semibold bg-[#23be0a0d] py-1.5 px-4 rounded-xl'>#Young Adult</p>
                        <p className='text-[#23BE0A] font-semibold bg-[#23be0a0d] py-1.5 px-4 rounded-xl'>#Identity</p>
                    </div>
                    <hr className=' border-t-[#13131326] my-3' />
                    <div className='font-bold flex gap-6'>
                        <div className='text-[#131313b3] font-normal'>Number of Pages : </div>
                        <div>281</div>
                    </div>
                    <div className='font-bold flex gap-6 my-3'>
                        <div className='text-[#131313b3] font-normal'>Publisher : </div>
                        <div>281</div>
                    </div>
                    <div className='font-bold flex gap-6 my-3'>
                        <div className='text-[#131313b3] font-normal'>Year of Publishing : </div>
                        <div>281</div>
                    </div>
                    <div className='font-bold flex gap-6 my-3'>
                        <div className='text-[#131313b3] font-normal'>Rating : </div>
                        <div>281</div>
                    </div>

                    <div className='flex justify-center md:justify-start gap-4 mt-8'>
                        <button className='font-bold border rounded-xl py-4 px-8'>Read</button>
                        <button className='font-semibold  rounded-xl py-4 px-6 bg-[#50B1C9] text-white'>WishList</button>
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