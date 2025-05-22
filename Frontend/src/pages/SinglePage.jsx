import { useNavigate, useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import axios from "axios";
import { useEffect, useState } from "react";

function SinglePage(){
    const navigate = useNavigate();
    const {id} = useParams();
    const [book, setBook] = useState({});
    const fetchSingleBook = async ()=>{
   const response = await axios.get("http://localhost:3000/books/"+id)
        
        setBook(response.data.data);
        console.log(response);
        
    }
    const deleteBook = async ()=>{
        const response = await axios.delete("http://localhost:3000/books/"+id);

        if(response.status === 200){
            //using navigate to navigate to the homepage
            navigate("/");
        }

        else{
            alert("Something went wrong.");
        }

    }

    useEffect(()=>{
        fetchSingleBook()
    },[])

    return (
<div className="ml-2">
<NavBar/>
  <h1>{book.bookName}</h1>
  <p>{book.bookAuthor}</p>
  <p>{book.bookGenre}</p>
  <p>{book.bookPrice}</p>
                          <button onClick={deleteBook} className="cursor-pointer mt-4 rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow">
              Delete
            </button>
</div>
    )
}

export default SinglePage