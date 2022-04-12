import Letter from './letter'

export default function({secretWord, guessedLetters}){
    //function <span> process
    //<span>R</span><span>E</span>...
    //react 문자 >> 배열, 대상.split('')
    //배열의 특정조건 맞는 값만 정리해서 새로운 배열 .map
    //react

  let letters = secretWord
                .split('')
                .map((letter,index) => {
                    let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
                    return(
                        <Letter 
                            value={letter}
                            isShown={isShown}
                            key={index}
                        />
                    )
                });

  return (
    <div className="flex">
        {letters}
    </div>
  );
}
