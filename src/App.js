// imports
import './App.css';

import Header from './components/Header/Header'

// logic
const App = () => {

  // initialization
  let year = 2024
  
  // renderization
  return (
    <div className={ year > 2030 ? 'App future' : 'App past' }>

      <Header />

      <h2>Hola Mundo en el año { year }</h2>

      <p>Estamos en el { year > 2030 ? 'futuro' : 'pasado' }</p>
    </div>
  );
}

// exports
export default App;
