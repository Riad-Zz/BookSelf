import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getListedBooks, getWishListed } from '../../Utilities.jsx/LocalData';
import ListBookCard from './ListBookCard';
import WishedBookCard from './WishedBookCard';



const ListedBook = () => {

    const [allListed, setAllListed] = useState([]);
    const [allWished, setAllWished] = useState([]);
    const allBooks = useLoaderData();
    useEffect(() => {

        const listedBooks = getListedBooks();
        const wishedBook = getWishListed();

        const convListedBooks = listedBooks.map(id => parseInt(id));
        const convWishListedBooks = wishedBook.map(id => parseInt(id));
        // console.log(convListedBooks) ;
        console.log(convWishListedBooks);


        const finalAllListed = allBooks.filter(book => convListedBooks.includes(book.bookId));
        const finalAllWished = allBooks.filter(book => convWishListedBooks.includes(book.bookId));
        // console.log(finalAllListed) ;
        setAllListed(finalAllListed);
        setAllWished(finalAllWished);
        console.log(finalAllWished);
    }, [])

    const [sort, setSort] = useState("");

    const sortControl = (type) => {
        setSort(type);
        if (type === "page") {
            const sortedpage = [...allListed].sort((a, b) => a.totalPages - b.totalPages);
            const wishSortedPage = [...allWished].sort((a,b) => a.totalPages - b.totalPages) ;
            setAllListed(sortedpage);
            setAllWished(wishSortedPage) ;
            // console.log("Hello page")
        }
        if (type === "year") {
            const sortedyear = [...allListed].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            const wishedSortedYear = [...allWished].sort((a,b)=>a.yearOfPublishing - b.yearOfPublishing) ;
            setAllListed(sortedyear);
            setAllWished(wishedSortedYear) ;
            // console.log("Hello year")
        }
    }


    return (
        <div className='md:max-w-10/12 mx-auto mt-10'>

            <div className='flex justify-center '>
                <select defaultValue="Sort" className="select select-success">
                    <option disabled={true}>Sort</option>
                    <option onClick={() => sortControl("page")}>Sort by Page</option>
                    <option onClick={() => sortControl("year")}>Sort by Year</option>
                </select>
            </div>


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