import { useNavigate } from 'react-router-dom';
import '../assets/css/typing.css';
import { useEffect, useRef, useState } from 'react';

interface BookItem {
  id: number;
  text: string;
}

const TextContainer = () => {
  const [userInput, setUserInput] = useState('');
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [numberoftyped, setNumberOfText] = useState(0);
  const [correctTyped, setCorrectType] = useState(0);
  const [timeleft, setTimeleft] = useState(60);

  const inputRef = useRef<HTMLInputElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const item = localStorage.getItem('settingkey');
    setCorrectType(2)
    let filename = '';
    if (item === null) {
      navigate(-1);
    } else {
      const trimmed = item.trim().slice(0, -2);
      filename = `data/${trimmed}.json`;
    }

    fetch(filename)
      .then((response) => response.json() as Promise<BookItem[]>)
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const text = data[randomIndex].text;
        const words=text.trim().split(/\s+/)
        const chunkSize=window.innerWidth<779?5:8;
        const splitted:string[]=[];
        for (let i = 0; i < words.length; i+=chunkSize) {
          const chunk=words.slice(i,i+chunkSize).join(' ')
          splitted.push(chunk)
        }
        // const splitted = text.match(/.{1,50}/g) || []; // Split text into 50-char lines
        setLines(splitted);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (timeleft === 0) {
      localStorage.setItem('numberTyped', numberoftyped.toString());
      localStorage.setItem('correctTyped', correctTyped.toString());
      navigate('../result');
      return;
    }
    const timer = setInterval(() => {
      setTimeleft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeleft]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (lineRef.current) {
      lineRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentLineIndex]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);
    setNumberOfText((prev) => prev + 1);

    const currentLine = lines[currentLineIndex] || '';

    if (value.length >= currentLine.length) {
      // Move to next line regardless of correctness
      setCurrentLineIndex((prev) => prev + 1);
      setUserInput('');
    }
  };

  const renderLines = () => {
    return lines.map((line, index) => {
      const isActive = index === currentLineIndex;
  
      return (
        <div
          key={index}
          className={isActive ? 'active-line' : 'line'}
          ref={isActive ? lineRef : null}
        >
          {isActive
            ? line.split('').map((char, charIndex) => {
                const typedChar = userInput[charIndex];
                let className = 'gray';
  
                if (typedChar !== undefined) {
                  if (typedChar === char) className = 'green';
                  else className = 'red';
                }
  
                return (
                  <span key={charIndex} className={className}>
                    {char}
                  </span>
                );
              })
            : line}
        </div>
      );
    });
  };

  return (
    <div className='container'>
      <div className='head'>
        <h1>TYPING TEST</h1>
        <h3>TIME: {timeleft}</h3>
      </div>

      <div className='textarea'>{renderLines()}</div>

      <input
        ref={inputRef}
        type='text'
        value={userInput}
        onChange={handleInput}
        placeholder='start typing'
        autoFocus
        style={{ opacity: 0 }}
      />
    </div>
  );
};

export default TextContainer;

