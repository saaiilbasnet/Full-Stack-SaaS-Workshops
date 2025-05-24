import { useNavigate, useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import axios from "axios"
import { useEffect, useState } from "react"

function EditPage(){
    const navigate = useNavigate()
    const [book, setBook] = useState({})
    const {id} = useParams()

    const fetchBook = async ()=>{
      const response = await axios.get("http://localhost:3000/books/"+id);
              setBook(response.data.data);
    }

    useEffect(()=>{
        fetchBook()
    },[])

    const handleChange = (event)=>{
            const {name, value} = event.target
            setBook({
                ...book,
                [name] : value
            })
    }

    const editBook = async (event)=>{

        event.preventDefault();

      let response =  await axios.patch("http://localhost:3000/books/"+id,book)
        if(response.status === 200){
            alert("Successfully Edited.")
            navigate("/")
        }
        else{
            alert("Something went wrong")
        }
    }

    return (

<>
<NavBar/>

<div className="flex items-center justify-center min-h-screen ">
  <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
    <h1 className="text-2xl font-semibold mb-4 text-gray-800">Edit Book</h1>
    <form onSubmit={editBook}>
      {/* Book Name */}
      <div className="mb-4">
        <label htmlFor="cardholder-name" className="block text-sm font-medium text-gray-700">Book Name</label>
        <input onChange={handleChange} value={book.bookName} type="text" id="cardholder-name" name="bookName" placeholder="Basic Mathematics" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required />
      </div>
      {/* Book Price */}
           <div className="mb-4">
        <label htmlFor="cardholder-name" className="block text-sm font-medium text-gray-700">Book Price</label>
        <input onChange={handleChange} value={book.bookPrice} type="text" id="cardholder-name" name="bookPrice"  placeholder="$999" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required />
      </div>
      
              <div className="mb-4">
        <label htmlFor="cardholder-name" className="block text-sm font-medium text-gray-700">Book Author</label>
        <input onChange={handleChange} value={book.bookAuthor} type="text" id="cardholder-name" name="bookAuthor"  placeholder="John Doe" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required />
      </div>

            <div className="mb-4">
        <label htmlFor="cardholder-name" className="block text-sm font-medium text-gray-700">Book Genre</label>
        <input onChange={handleChange} value={book.bookGenre} type="text" id="cardholder-name" name="bookGenre"  placeholder="Sci-Fi, Action, Romance" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required />
      </div>

      {/* Submit Button */}
      <div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition">
          Edit Book
        </button>
      </div>
    </form>
  </div>
</div>

</>

    )
}

export default EditPage