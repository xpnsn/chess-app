import './App.css';
import {initialBoard} from'./pieces/pieces'

function App() {
  const boxId=[];

  for(let i=8; i>0; i--) {
    for(let j=97; j<105; j++) {
      boxId.push(String.fromCharCode(j)+i);
    }
  }

  function createBoard() {
    const board = [];

    for (let i = 0; i < 64; i++) {
      const row = Math.floor(i/8);
      const column = i%8;

      const squareColor = (row + column) % 2 === 0 ? 'light-square' : 'dark-square';
      const piece = initialBoard[i]; 
      
      board.push(
        <div className={`box ${squareColor}`} id={boxId[i]}>
          {initialBoard[i]}
        </div>
      );
    }
    console.log(board);
    return board;
  }

  return (
    <div className="App">
      <div className='big-container'>
        <div className="container">
          {createBoard()}
        </div>
      </div>
    </div>
  );
}

export default App;
