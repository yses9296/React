import {useState} from "react";
import LetterGrid from './letter-grid'
import ButtonGrid from './button-grid'

export default function({secretWord, maxErrors,isShown}){
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [errorCount, setErrorCount] = useState(0);

  const letterGuessedHandler = function(letter){

    let val = letter.toLowerCase();
    setGuessedLetters( prev => [...prev, val] );
    /*
      spread operator mdn

      spread operator 스프레드 연산자(전개연산자)   
      [...변수명] -> 배열
      var list = querySelectorAll('.list) 유사배열

      ex) 
        var parts = ['shoulders', 'knees'];
        var lyrics = ['head', ...parts, 'and', 'foot'];

        output: head, shoulders, knees, and, foot

    */

    if(secretWord.toLowerCase().indexOf(val) === -1){ //secretWord와 val의 값이 일치하지 않을 시 -1 >> error
      setErrorCount(errorCount + 1);
    }
  }



  return (
    <div className={isShown ? '': 'hidden'}>
        <div>남은 횟수: {maxErrors - errorCount}</div>
        <LetterGrid 
          secretWord={secretWord}
          guessedLetters={guessedLetters} //클릭한 버튼의 값 전달 받는다.
        />
        <ButtonGrid 
          letterGuessed={letterGuessedHandler} 
          //button.js에서부터 값 전달받아 하나씩 함수로 적용 >> letterGuessedHandler function(letter)
          //입력한 알파벳의 배열 생성 과정 {letterGuessedHandler}
          //setGuessedLetters 값으로 계속해서 배열 추가 [...prev, val]
          isShown={errorCount < maxErrors}
        />
    </div>
  );
}
