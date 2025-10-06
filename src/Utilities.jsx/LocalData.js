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
        // console.log(allBooks) ;
    }
}

const getWishListed = () =>{
    const localWishList = localStorage.getItem("Wish") ;
    if(localWishList){
        const WishListed  = JSON.parse(localWishList) ;
        return WishListed
    }else{
        return [] ;
    }
}

const setWishListed = (id) =>{
   const allWishListed =  getWishListed() ;
//    console.log(id) ;
   if(allWishListed.includes(id)){
    alert("Available");
   }else{
     allWishListed.push(id) ;
     const allWished = JSON.stringify(allWishListed) ;
     localStorage.setItem("Wish",allWished) ;
    console.log(allWished) ;
   }
}

export {setListedBook,getListedBooks,getWishListed,setWishListed} ;