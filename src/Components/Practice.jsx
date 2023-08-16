import axios from 'axios'
import React, {  useState } from 'react'

export const Practice = () => {
    const [data, setData] = useState({})
const buttonClick = ()=>{
    axios.get("https://catfact.ninja/fact").then((res)=>{
        console.log(res.data)
           setData(res.data)
           console.log(data)
        }

        ).catch((error)=>{
            console.log(error)
        }

        )
}
        

   
  return (
    <div>  <button onClick={buttonClick}>View Data</button>
        <span>
           {data && data.fact}
        </span>
      
    </div>
  )
}
