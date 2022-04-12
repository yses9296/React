import {useState} from "react";

export default function({wordSelected, isShown}){
    const [secretWord, setSecretWord] = useState('');

  return (
    <div>
        <input type="text" onChange={e => setSecretWord(e.target.value)}/>
        <button onClick={e => wordSelected(secretWord) }>Set Word</button>
    </div>
  )
}
