import GameBoard from './game-board'

export default function App(){
  return (
    <div>
      <div>
        <h1>Welcome to Hangman!</h1>
        <p>Do you want to play game?</p>
      </div>
      <div>
        <GameBoard secretWord="React"/>
      </div>

    </div>
  );
}
