import Button from './button'

export default function({letterGuessed, isShown}){
    /*
    A to Z 배열 생성, 배열 값마다 할일
    변수명 letters
    <button>A</button> <button>B</button> ..
    */
   let letters = [
       'A', 'B', 'C', 'D', 'E', 'F', 'G','H', 
       'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 
       'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 
       'Y', 'Z'
   ];
   let buttons = letters.map((letter, index)=> (
        <Button 
                value={letter}
                key={index}
                onClick={letterGuessed}
        />
   ));
    let className = 'flex flex-wrap';

    if (!isShown){
        className += ' hidden';
    }

   return (
    <div className={className}>
        {buttons}
    </div>
  );   
    
}
