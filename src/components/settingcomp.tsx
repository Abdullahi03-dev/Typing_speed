import '../assets/css/settingcomp.css'
import ImageComponent from './image'
import image1 from '../assets/img/545682.png'
import {useState} from 'react'
// import toast from 'react-hot-toast/headless'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'


const settingcomp = () => {
        const navigate=useNavigate()
        const [selected,setSelected]=useState<string| null>(null)
        const [selectedid,setSelectedid]=useState<string>("")

        const handlecheck=(e:React.ChangeEvent<HTMLInputElement>)=>{
                setSelected(e.target.value);
                setSelectedid(e.target.id);
        }

        const handleGo=()=>{
                if(selected){
                        localStorage.setItem('settingkey',selectedid)
                        console.log(selectedid)
                        navigate('/typingtest')

                }else{
                        // alert('put time bro')
                        toast.error('CHOOSE TIME')
        }
        }
  return (
    <>
    <h1 className='header_tag'>SET SETTINGS</h1>
    <div className="cards">
        <div className="card">
                <h3>Easy</h3>
                <span className='timers'>
                <input type='radio' className='checkbox' name='difficulty' value='1' checked={selected==='1'} onChange={handlecheck} id='easy30'/><p>30 sec</p>
                <input type='radio' className='checkbox' name='difficulty' value='2' checked={selected==='2'} onChange={handlecheck} id='easy60'/><p>1 min</p>
                </span>
                <p>Practice with short and simple sentences. No punctuation stress or long words. Perfect for beginners to gain confidence and improve accuracy</p>
                <button onClick={handleGo}>GO<ImageComponent src={image1} alt="arrow" height='20px' width='20px' className='img'/></button>

        </div>


        <div className="card">
                <h3>Medium</h3>
                <span className='timers'>
                <input type='radio' className='checkbox' name='difficulty' value='3' checked={selected==='3'} onChange={handlecheck} id='medium30'/>
                <p>30 sec</p>
                <input type='radio' className='checkbox' name='difficulty' value='4' checked={selected==='4'} onChange={handlecheck} id='medium60'/><p>1 min</p>
                </span>
                <p>improve your typing with moderately long sentences. Include basic punctuation,mixed word lengths, and helps build speed with steady accuracy</p>
                <button onClick={handleGo}>GO<ImageComponent src={image1} alt="arrow" height='20px' width='20px' className='img'/></button>

        </div>

        <div className="card">
                <h3>Hard</h3>
                <span className='timers'>
                <input type='radio' className='checkbox' name='difficulty' value='5' checked={selected==='5'} onChange={handlecheck} id='hard30'/>
                <p>30 sec</p>
                <input type='radio' className='checkbox' name='difficulty' value='6' checked={selected==='6'} onChange={handlecheck} id='hard60'/>
                <p>1 min</p>
                </span>
                <p>Test your skills with complex senetence. Includes punctuation, longer words and techniacl language to challenge your speed and boost sharp focus</p>
                <button onClick={handleGo}>GO<ImageComponent src={image1} alt="arrow" height='20px' width='20px' className='img'/></button>
        </div>
    </div>
    
    
    </>
  )
}

export default settingcomp