import './App.css';
import Instructions from './Instructions'
import Stats from './Stats'
import Game from './Game'

const App = () => {

  return (
    <div className = "App">
        <Instructions />
        <Game />
        <Stats />
    </div>
  )
}

export default App
