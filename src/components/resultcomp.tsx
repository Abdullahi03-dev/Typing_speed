
// import React from 'react'
import { useState,useEffect } from "react"
import { useNavigate } from 'react-router-dom';

import '../assets/css/result.css'
const result = () => {
    const [wpm,setwpm]=useState<number>(0)
    const [accuracy,setaccuracy]=useState<number>(0)
   const navigate=useNavigate()


    

    useEffect(()=>{
        let accuracyscore=0
        let wpmscore=0
        let typedtext=localStorage.getItem('numberTyped')
        let correctTyped=localStorage.getItem('correctTyped')
        if(typedtext!==null&&correctTyped!==null){
            let typednum=parseFloat(typedtext)
            let correctnum=parseFloat(correctTyped)

             wpmscore=Math.round((typednum/5)/(60/60))
             accuracyscore=Math.round((correctnum/typednum)*100)
             

        }
        if(!isNaN(accuracyscore)&&!isNaN(wpmscore)){
          setaccuracy(accuracyscore)
          setwpm(wpmscore)    
        }else{
          setaccuracy(0)
          setwpm(0)
        }

    },[])


  return (
    <>
    

    <section>
        <div className="result_div">
            <h2>CONGRATULATIONS!</h2>
            <h4>YOUR RESULTS</h4>
            <span>Your WPM IS: { wpm} <h6 className="wpm">WPM</h6></span>
            <span>Your ACCURACY IS: { accuracy}%</span>
        <button onClick={()=>navigate('../settings')}>GO HOME</button>
        </div>
    </section>
    
    </>
  )
}

export default result