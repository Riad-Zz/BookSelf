import { createBrowserRouter} from 'react-router'
import App from '../App'
import Root from '../Pages/Root/Root'
import Home from '../Pages/Home/Home'
import BookDetails from '../Components/BookDetails/BookDetails'
import ListedBook from '../Pages/LIstedBook/ListedBook'


export const router = createBrowserRouter([
  {
    path : "/" ,
    Component: Root,
    errorElement : <p className='text-black'>Page Not Found</p>,
    children : [
      {index:true , path :'/' , Component : Home} ,
      {path :'Details/:id' , loader : ()=>fetch('./booksData.json'),Component :BookDetails},
      {path :'listed', loader : ()=>fetch('./booksData.json'),Component : ListedBook },
    ]
  }
])