import { useState } from 'react';
import './App.css';




function App() {

  // const [string, setString] = useState('');
  const [character, setCharacter] = useState(0);
  const [words, setWords] = useState(0);

 const wordCounter = (e) => {
   let string = e.target.value;
  setCharacter(string.split('').length - string.split(' ').length + 1);
  setWords(string.split(' ').length);
 }

  return (
    <div className="App">
      <div className='HeadLine'>
      <h1>Word Counter</h1>
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
        <p className='word-counter-stat-heading'>FACEBOOK</p>
        <p className='word-counter-stat-text'>{250 - character}/250</p>
        </div>

        <div className='Twitter'>
        <p className='word-counter-stat-heading'>TWITTER</p>
        <p className='word-counter-stat-text'>{280 - character}/280</p>
        </div>

        <div className='Google'>
        <p className='word-counter-stat-heading'>GOOGLE</p>
        <p className='word-counter-stat-text'>{300 - character}/300</p>
        </div>
      </div>

      <div className='text'>

        <textarea id='xyx' onChange={(e)=>{wordCounter(e)}} placeholder='Text Here' rows='10'>

        </textarea>



        

      </div>
      </div>

    </div>
  );
}

export default App;
