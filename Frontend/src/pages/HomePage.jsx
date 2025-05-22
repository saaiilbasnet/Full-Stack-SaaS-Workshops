import axios from "axios"
import Card from "../components/Card"
import NavBar from "../components/NavBar"
import { useEffect, useState } from "react"

function HomePage(){
  const [books, setBooks] = useState([])
  const fetchBooks = async ()=>{
   const response = await axios.get("http://localhost:3000/books/")
   setBooks(response.data.datas);
   console.log(response.data.datas);
   
  }
  useEffect(()=>{
  fetchBooks()    
  },[])

    return (
        <>
<NavBar/>
<div className="flex flex-wrap mt-4" >
{
books.map(function(book){
    return (
      <Card key={book.id} book={book} />
    )
})
}
</div>
        </>
    )
}



export default HomePage