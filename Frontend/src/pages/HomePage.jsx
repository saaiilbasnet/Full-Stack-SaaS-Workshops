import axios from "axios"
import Button from "../components/button"
import Card from "../components/Card"
import NavBar from "../components/NavBar"
import { useEffect } from "react"

function HomePage(){

  const fetchBooks = async ()=>{
   const response = await axios.get("http://localhost:3000/books/")
  }

  useEffect(()=>{
  fetchBooks()    
  },[])

    return (
        <>

<NavBar/>
<div className="flex flex-wrap justify-center items-center mt-4" >
  <Card title="Book1" />
  <Card title="Book2" />
  <Card title="Book3" />
  <Card title="Book4" />
  <Card title="Book5" />
  <Card title="Book6" />
</div>

        </>
    )
}



export default HomePage