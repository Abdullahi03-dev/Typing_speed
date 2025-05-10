import { useNavigate } from 'react-router-dom';
import '../assets/css/typing.css'
interface BookItem{
  id:number;
  text:string;
}
import {useEffect, useRef, useState} from 'react'
const textContainer=()=> {
  
  const [userInput,setUserInput]=useState<string>("")
  const [randomtext,setRandomText]=useState<string>("")
  const [numberoftyped,setNumberOfText]=useState<number>(0)
  const [correctTyped,setCorrectType]=useState<number>(0)

  const [timeleft,setTimeleft]=useState<number>(0)
  const inputref=useRef<HTMLInputElement>(null)



  const navigate=useNavigate()


  useEffect(()=>{
    const handleBeforeUnload=(event:any)=>{
      event.preventDefault()
      event.returnValue=''
    }

    window.addEventListener('beforeunload',handleBeforeUnload)

    return ()=>{
      window.removeEventListener('beforeunload',handleBeforeUnload)
    }
  },[])

useEffect(()=>{
  const item =localStorage.getItem('settingkey')
  if(item!==null){
    let time=parseFloat(item.slice(-2))
    if(!isNaN(time)){
      setTimeleft(time)
    }else{
      setTimeleft(60)
    }
  }else{
    setTimeleft(60)
  }
},[])
  
 useEffect(()=>{
  if(timeleft==0){
    localStorage.setItem('numberTyped',numberoftyped.toString())
    localStorage.setItem('correctTyped',correctTyped.toString())
    return
  }
  const timer =setInterval(()=>{
    setTimeleft((prev)=>prev-1)
  },1000)

  return ()=>clearInterval(timer)
 },[timeleft])
  useEffect(()=>{
  const item =localStorage.getItem('settingkey')
    let filename=''
    if(item === null){
      navigate(-1)
    }else{
      const trimmed=item.trim().slice(0,-2)
       filename=`data/${trimmed}.json`;
    }
      
    fetch(`${filename}`)
    .then((response)=>response.json() as Promise<BookItem[]>)
    
    .then((data)=>{
      const randomIndex=Math.floor(Math.random()*data.length)
      const text=data[randomIndex].text
      setRandomText(text)
    })
    .catch((err)=>{
        console.log(err)
    })

  },[])
 

  useEffect(()=>{
    // inputref.current.focus()
    const handleclick=()=>{
      if(inputref.current){
      inputref.current.focus()
      }
    }
    document.addEventListener('click',handleclick);
    return ()=>
    document.removeEventListener('click',handleclick)
  },[])




const handleinput=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setUserInput(e.target.value)
  setNumberOfText((prev)=>prev+1)
}

  //function for rendering text
  
  const renderingText=()=>{
    return randomtext.split("").map((char,index)=>{
      const typedtext=userInput[index];

      let className='graycolor';
      if(typedtext===char){
      className='greencolor';
      }else if (typedtext!==undefined){
        className='redcolor'
      }

      return(
        <span key={index} className={className}>{char}</span>
      )
    })
  }
  let count=0
  useEffect(()=>{
    for (let i = 0; i < randomtext.length; i++) {
      if(randomtext[i]===userInput[i])
      count++
    }
    setCorrectType(count)
   
  },[randomtext,userInput])
useEffect(()=>{
  if(timeleft==0&&userInput.length>0){
    navigate('../result')
  }
},[timeleft])







  return (
    <>
    <div className='container'>
      <div className='head'>
      <h1>TYPING TEST</h1>
      <h3>TIME:{timeleft}</h3>
      </div>
            
              <div className='textarea'>
              {renderingText()}

              </div>


            <input ref={inputref} 
            type='text'
            value={userInput}
            onChange={handleinput}
            placeholder='start typing'
            autoFocus
            style={{opacity:0}}
            />
    </div>
    </>
  )
}

export default textContainer