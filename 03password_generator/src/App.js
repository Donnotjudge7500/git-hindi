
import { useState, useCallback, useEffect, useRef } from 'react';


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [character, setCharacter] = useState(false);
  const [Password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Copy")

  // useRef hook...
  const passwordRef = useRef(null)

  // Using Callback for optimization.
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str +="0123456789"
    if (character) str += "$*&@#_!%~"
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass);
  }, [length, numberAllowed, character, setPassword])

  const copyPasswordOnClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 6);   Selects only six characters.
    window.navigator.clipboard.writeText(Password);
  }, [Password])

  // Frequently running functions...
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, character, passwordGenerator])

  const buttonTextChanger = () => {
    setButtonText("Copied")
  }
  
  const onClickOnButton = () => {
    copyPasswordOnClipboard();
    buttonTextChanger()
  }
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-400 bg-gray-700 h-auto'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={ Password }
            className='outline-none w-full py-1 px-3'
            placeholder='password' readOnly ref={passwordRef}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={ onClickOnButton }
          
          >{buttonText}</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={ 6 }
              max={ 100 }
              value={ length }
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1' >
            <input
              type='checkbox'
              defaultChecked={ numberAllowed }
              onChange={ () => {
                setNumberAllowed((prev) => !prev);
              } } />
            <label htmlFor='numberInput'>Number</label>
          </div>
          <div className='flex items-center gap-x-1' >
            <input
              type='checkbox'
              defaultChecked={ character }
              onChange={ () => {
                setCharacter((prev) => !prev);
              } } />
            <label htmlFor='numberInput'>Character</label>
          </div>
        </div>
      </div>
     </>
  );
}

export default App;
