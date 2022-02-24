import { useState, useEffect } from 'react';
import './App.css';
import {DropdownButton, Dropdown, ButtonGroup} from 'react-bootstrap'



function App() {

  // const [string, setString] = useState('');
  const [character, setCharacter] = useState(0);
  const [words, setWords] = useState(0);
  const [sentence, setSentence] = useState(0);
  const [paragraph, setParagraph] = useState(0);
  const [isBold, setIsBold] = useState(false);
  const [isLarge, setIsLarge] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [autoSave, setAutoSave] = useState();

 const wordCounter = (e) => {
   let string = e.target.value;
   setTextValue(e.target.value);
  setCharacter(string.split('').length - string.split(' ').length + 1);
  setWords(string.split(' ').length);
  setSentence(string.split('.').length);
  setParagraph(string.split(/\r?\n/).length);
 }

const resetHandler = () => {
  setTextValue("");
  setParagraph(0);
  setCharacter(0);
  setWords(0);
  setSentence(0);
}

useEffect(() => {
 if(autoSave===true)
 {
  localStorage.setItem("textvalue", textValue)
 }
 if(autoSave===false){
  localStorage.removeItem("textvalue")
 }
}, [textValue,autoSave]);

useEffect(() => {
  setTextValue(localStorage.getItem("textvalue"))
 }, []);
 

  return (
    <div className="App">
      <div className='HeadLine'>
      <h1>Word Counter</h1>
      </div>

      <div className='Button-Action-Group'>
        <DropdownButton
          style={{
          backgroundColor:'white'
          }}
          as={ButtonGroup}
          key='end'
          id={`dropdown-button-drop-end`}
          drop='down'
          variant=""
          title={`Auto Save`}
          >
        <Dropdown.Item onClick={()=>{setAutoSave(true)}}>ON</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setAutoSave(false)}}>OFF</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
          style={{
          backgroundColor:'white'
          }}
          as={ButtonGroup}
          key='end'
          id={`dropdown-button-drop-end`}
          drop='down'
          variant=""
          title={`Reset`}
          >
        <Dropdown.Item onClick={resetHandler}>Reset</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
          style={{
          backgroundColor:'white'
          }}
          as={ButtonGroup}
          key='end'
          id={`dropdown-button-drop-end`}
          drop='down'
          variant=""
          title={`Text Size`}
          >
        <Dropdown.Item onClick={()=>{setIsLarge(false)}} >+</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setIsLarge(true)}}>++</Dropdown.Item>
       
        
      </DropdownButton>

      <DropdownButton
          style={{
          backgroundColor:'white'
          }}
          as={ButtonGroup}
          key='end'
          id={`dropdown-button-drop-end`}
          drop='down'
          variant=""
          title={`Text Bold`}
          >
        <Dropdown.Item onClick={()=>{setIsBold(true)}}>ON</Dropdown.Item>
        <Dropdown.Item onClick={()=>{setIsBold(false)}}>OFF</Dropdown.Item>
        
      </DropdownButton>
      </div>

      <div className='Word-Counter'>
      <div className='word-counter-stat'>
        <div className='Words'>
          <p className='word-counter-stat-heading'>WORDS</p>
          <p className='word-counter-stat-text'>{words}</p>
        </div>

        <div className='Characters'>
        <p className='word-counter-stat-heading'>CHARACTERS</p>
        <p className='word-counter-stat-text'>{character}</p>
        </div>
        </div>

        <div className='word-counter-stat'>
        <div className='Facebook'>
        <p className='word-counter-stat-heading'>SENTENCE</p>
        <p className='word-counter-stat-text'>{sentence}</p>
        </div>

        <div className='Twitter'>
        <p className='word-counter-stat-heading'>PARAGRAPH</p>
        <p className='word-counter-stat-text'>{paragraph}</p>
        </div>

        {/* <div className='Google'>
        <p className='word-counter-stat-heading'>GOOGLE</p>
        <p className='word-counter-stat-text'>{300 - character}/300</p>
        </div> */}
      </div>

      <div className='text'>

        <textarea value={textValue} className={`${isBold?'bold' : ''} ${isLarge?'font-size-2':''} `} id='xyx' onChange={(e)=>{wordCounter(e)}} placeholder='Text Here' rows='10'>

        </textarea>



        

      </div>
      </div>

    </div>
  );
}

export default App;
