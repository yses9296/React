import LetterGrid from './letter-grid'

export default function({secretWord}){
  return (
    <div>
        <LetterGrid secretWord={secretWord} guessedLetters={['a','r']}/>
    </div>
  );
}
