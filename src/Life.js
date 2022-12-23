import React, { useEffect, useState } from 'react'

function Life() {

  const [data, setdata] = useState(true)
  const [second, setsecond] = useState(true)
    useEffect(() => {
        console.log("born item");
        return () => {
            console.log(" item dead");
          }
      }, [])
    useEffect(() => {
      console.log("rendered item");
    })

    useEffect(() => {
      console.log("Data state deyisdi ");
    }, [data])
    useEffect(() => {
      console.log("Second state deyisdi ");
    }, [second])

    function ChangeBoolState(state,setState) {
      setState(!state)
    }
    
    
  return (
    <div >
      <button onClick={()=>ChangeBoolState(data,setdata)} > 1 dataa</button>
      <button onClick={()=>ChangeBoolState(second,setsecond)}> 2 second</button>
    </div>
  )
}

export default Life