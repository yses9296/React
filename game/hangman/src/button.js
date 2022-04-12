import {useState} from "react";

export default function({value, onClick}){

  //버튼 초기값 설정 (아직 버튼 누르지 X)
  //isClicked (초기값) == false (누르지않았음)
  const [isClicked, setIsClicked] = useState(false); 
  
  let className = 'button';

  if(isClicked){
    className += ' guessed';
  }

  function clickHandler(){ //누른 버튼을 true값으로 변경 후 class 'guessed' 추가, 버튼 숨기기
    setIsClicked(true);
    onClick(value);
  }

  return (
    <button 
      className={className}
      onClick={clickHandler}
    >{value}</button>
  );
}
