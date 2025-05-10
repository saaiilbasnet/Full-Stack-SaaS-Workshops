
//creating a home component

import { useState } from "react"

// using useState Hook to handle dynamic rendering of variables

function Home(){
    const [value, setValue] = useState(0)

    function increase(){
        setValue(value + 1)
    }

    function decrease(){
        setValue(value -1)
    }

    return (
    <>
          <h1>{value}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
    )
}

export default Home