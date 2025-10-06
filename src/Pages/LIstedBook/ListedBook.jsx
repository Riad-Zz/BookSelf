import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getListedBooks, getWishListed } from '../../Utilities.jsx/LocalData';
import ListBookCard from './ListBookCard';
import WishedBookCard from './WishedBookCard';



const ListedBook = () => {

    const [allListed,setAllListed] = useState([]) ; 
    const [allWished,setAllWished]  = useState([]) ;
    const allBooks = useLoaderData() ;
    useEffect(() => {

        const listedBooks = getListedBooks() ;
        const wishedBook = getWishListed() ;

        const convListedBooks = listedBooks.map(id => parseInt(id)) ;
        const convWishListedBooks = wishedBook.map(id => parseInt(id)) ;
        // console.log(convListedBooks) ;
        console.log(convWishListedBooks) ;


        const finalAllListed = allBooks.filter(book => convListedBooks.includes(book.bookId)) ;
        const finalAllWished = allBooks.filter(book => convWishListedBooks.includes(book.bookId)) ;
        // console.log(finalAllListed) ;
        setAllListed(finalAllListed) ;
        setAllWished(finalAllWished) ;
        console.log(finalAllWished) ;
    },[]) 



    return (
        <div className='md:max-w-10/12 mx-auto mt-10'>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>WishList</Tab>
                </TabList>

                <TabPanel className={`mt-5`}>
                    
                    {
                        allListed.map(item => <ListBookCard key={item.bookId} item={item}></ListBookCard>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        allWished.map(item => <WishedBookCard key={item.bookId} item={item}></WishedBookCard>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBook;