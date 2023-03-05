import './App.css';
import Instructions from './Instructions'
import Stats from './Stats'
import Game from './Game'

const App = () => {

  return (
    <div className = "App">
      <section id="instructions-section">
        <Instructions />
      </section>
      <section id="game-section">
        <Game />
      </section>
      <section id="stats-section">
        <Stats />
      </section>
    </div>
  )
}

export default App
