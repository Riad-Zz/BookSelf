import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getListedBooks } from '../../Utilities.jsx/LocalData';
import ListBookCard from './ListBookCard';



const ListedBook = () => {

    const [allListed,setAllListed] = useState([]) ; 
    const allBooks = useLoaderData() ;
    useEffect(() => {
        const listedBooks = getListedBooks() ;
        const convListedBooks = listedBooks.map(id => parseInt(id)) ;
        // console.log(convListedBooks) ;
        const finalAllListed = allBooks.filter(book => convListedBooks.includes(book.bookId)) ;
        // console.log(finalAllListed) ;
        setAllListed(finalAllListed) ;
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
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBook;