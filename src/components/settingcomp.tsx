import '../assets/css/settingcomp.css'
import ImageComponent from './image'
import image1 from '../assets/img/545682.png'



const settingcomp = () => {
  return (
    <><input type='radio'/>
    <h1 className='header_tag'>SET SETTINGS</h1>
    <div className="cards">
        <div className="card">
                <h3>Easy</h3>
                <span className='timers'>
                <input type='checkbox' className='checkbox'/><p>30 sec</p><input type='checkbox' className='checkbox'/><p>1 min</p>
                </span>
                <p>Practice with short and simple sentences. No punctuation stress or long words. Perfect for beginners to gain confidence and improve accuracy</p>
                <button>GO<ImageComponent src={image1} alt="arrow" height='20px' width='20px' className='img'/></button>

        </div>


        <div className="card">
                <h3>Medium</h3>
                <span className='timers'>
                <input type='checkbox' className='checkbox'/><p>30 sec</p><input type='checkbox' className='checkbox'/><p>1 min</p>
                </span>
                <p>improve your typing with moderately long sentences. Include basic punctuation,mixed word lengths, and helps build speed with steady accuracy</p>
                <button>GO<ImageComponent src={image1} alt="arrow" height='20px' width='20px' className='img'/></button>

        </div>

        <div className="card">
                <h3>Hard</h3>
                <span className='timers'>
                <input type='checkbox' className='checkbox'/><p>30 sec</p><input type='checkbox' className='checkbox'/><p>1 min</p>
                </span>
                <p>Test your skills with complex senetence. Includes punctuation, longer words and techniacl language to challenge your speed and boost sharp focus</p>
                <button>GO<ImageComponent src={image1} alt="arrow" height='20px' width='20px' className='img'/></button>
        </div>
    </div>
    
    
    </>
  )
}

export default settingcomp