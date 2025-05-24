
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar"
import axios from "axios";
import { useState } from "react";

function CreatePage(){

      const navigate = useNavigate()
    const [bookData, setBookData] = useState({
        bookName : "",
        bookPrice : "",
        bookAuthor : "",
        bookGenre : ""
    })

    const handleChange = (event)=>{
        const {name, value} = event.target;
        setBookData({
            ...bookData,
            [name] : value
        }) 
    }
        
    const submitData = async (event)=>{
      event.preventDefault();

      const response = await axios.post("http://localhost:3000/books/",bookData);

      if(response.status === 200){
        navigate('/');
        alert("Book Added Successfully");
      }
      else{
        alert("Something went wrong!");
      }

    }

    return (
        <>
        <NavBar/>
        <div className="flex items-center justify-center min-h-screen ">
  <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
    <h1 className="text-2xl font-semibold mb-4 text-gray-800">Create Book</h1>
    <form onSubmit={submitData}>
      {/* Book Name */}
      <div className="mb-4">
        <label htmlFor="cardholder-name" className="block text-sm font-medium text-gray-700">Book Name</label>
        <input type="text" id="cardholder-name" onChange={handleChange} name="bookName" placeholder="Basic Mathematics" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required />
      </div>
      {/* Book Price */}
           <div className="mb-4">
        <label htmlFor="cardholder-name" className="block text-sm font-medium text-gray-700">Book Price</label>
        <input type="text" id="cardholder-name" onChange={handleChange} name="bookPrice"  placeholder="$999" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required />
      </div>
      
              <div className="mb-4">
        <label htmlFor="cardholder-name" className="block text-sm font-medium text-gray-700">Book Author</label>
        <input type="text" id="cardholder-name" onChange={handleChange} name="bookAuthor"  placeholder="John Doe" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required />
      </div>

            <div className="mb-4">
        <label htmlFor="cardholder-name" className="block text-sm font-medium text-gray-700">Book Genre</label>
        <input type="text" id="cardholder-name" onChange={handleChange} name="bookGenre"  placeholder="Sci-Fi, Action, Romance" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required />
      </div>

      {/* Submit Button */}
      <div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition">
          Add Book
        </button>
      </div>
    </form>
  </div>
</div>
        </>
    )
}

export default CreatePage