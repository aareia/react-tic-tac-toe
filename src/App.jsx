import Player from "./components/player"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbo="X" />
          <Player initialName="Player 2" symbo="O" />
        </ol>

        GAME BOARD
      </div>

      LOG
    </main>

  )
}

export default App
