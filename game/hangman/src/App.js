import {useState} from "react";
import './App.css';
import GameBoard from './game-board';
import WordSelect from'./word-select';

export default function App(){
  const [secretWord, setSecretWord] = useState('');

  return (
    <div className="container">
      <div>
        <h1>Welcome to Hangman!</h1>
        <p>Do you want to play game?</p>
      </div>
      <div>
        <WordSelect
                    wordSelected
                    isShown={!secretWord}
        />
        <GameBoard 
                    secretWord={secretWord}
                    maxErrors={6}
                    isShown={secretWord}
        />
      </div>

    </div>
  );
}
