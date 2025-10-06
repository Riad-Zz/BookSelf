const getListedBooks =  () =>{
    const localBookData = localStorage.getItem("listed") ;
    if(localBookData){
        const localListed = JSON.parse(localBookData) ;
        return localListed ;
    }else{
        return [] ;
    }
}

const setListedBook = (id) =>{
    const allListedBook = getListedBooks() ;
    if(allListedBook.includes(id)){
        alert("Already Exist");
    }else{
        allListedBook.push(id) ;
        const allBooks = JSON.stringify(allListedBook) ;
        localStorage.setItem("listed",allBooks) ;
        console.log(allBooks) ;
    }
}

export {setListedBook,getListedBooks} ;