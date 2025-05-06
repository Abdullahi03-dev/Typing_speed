import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../assets/css/home.css'
import ImageComponent from '../components/image'
import image1 from '../assets/img/545682.png'
import logo from '../assets/img/file_000000006e986246b004400cb3d487df.png'
import toast from 'react-hot-toast'

const home=()=>{
  const navigate=useNavigate();
  const [input,setInput]=useState<string>("")
  const [error,setEror]=useState<string>("Fill In The Input")


  const handleinput=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setInput(event.target.value)
  }

  const handlesubmit=()=>{
    if(input){
      localStorage.setItem('typingname',input)
      navigate('settings')
    }else{
      setEror('FILL IN THE INPUT')
      toast.error(error)
    }
  }
  return (
    <>
    <nav>
    <ImageComponent src={logo} alt="logo" height='60px' width='60px'/>
    </nav>
    
<div className='div_center'>
<h1>Welcome To Typing Speed Test</h1>
<h4>Test your typing speed and accuracy in real-time</h4>
<input type='' placeholder='Your Name' onChange={handleinput}/>
<button onClick={handlesubmit}>Continue<ImageComponent src={image1} alt="arrow" height='20px' width='20px' className='img'/></button>

</div>



    </>
  )
}

export default home