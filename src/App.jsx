// imports
import { useState } from 'react'

import './App.css'

import Header from './components/Header/Header'
import Tale from './components/Tale/Tale'

// logic
const App = () => {

  // initialization
  let year = 2034
  // let vip = true

  const [vip, setVip] = useState(true)
  const [tales, setTales] = useState([
    {
      id: 1,
      tale: 'Pan y pimiento',
      image: 'https://d36fw6y2wq3bat.cloudfront.net/recipes/pate-de-pimientos-del-piquillo-y-atun/900/pate-de-pimientos-del-piquillo-y-atun.jpg'
    },
    {
      id: 2,
      tale: 'Casi es viernes',
      image: 'https://d36fw6y2wq3bat.cloudfront.net/recipes/pate-de-pimientos-del-piquillo-y-atun/900/pate-de-pimientos-del-piquillo-y-atun.jpg'
    },
    {
      id: 3,
      tale: 'Sin nombre',
      image: 'https://d36fw6y2wq3bat.cloudfront.net/recipes/pate-de-pimientos-del-piquillo-y-atun/900/pate-de-pimientos-del-piquillo-y-atun.jpg'
    },
    {
      id: 4,
      tale: 'Yo qué sé',
      image: 'https://d36fw6y2wq3bat.cloudfront.net/recipes/pate-de-pimientos-del-piquillo-y-atun/900/pate-de-pimientos-del-piquillo-y-atun.jpg'
    }
  ])
  const [taleName, setTaleName] = useState('')
  const [taleImage, setTaleImage] = useState('')

  const checkVip = () => {
    if (vip) {
      return (
        <>
          <h3>¡Qué gusto verte por aquí!</h3>
          <p>Lorem ipsum dolor</p>
        </>
      )
    }
    else {
      return (
        <p>Anda, pasa</p>
      )
    }
  }

  const changeVIP = () => {
    setVip(!vip)
  }

  const addTale = () => {
    // Añadir los datos de los inputs al array
    setTales([...tales, {
      id: tales.length + 1,
      tale: taleName,
      image: taleImage
    }])
  }
  
  // renderization
  return (
    <div className={ year > 2030 ? 'App future' : 'App past' }>
      <Header />
      
      <h2>Hola Mundo en el año { year }</h2>

      <button onClick={changeVIP}>
        Cambiar VIPeidad
      </button>
      
      <p>Estamos en el { year > 2030 ? 'futuro' : 'pasado' }</p>

      {
        vip
        ?
        <>
          <h3>¡Qué gusto verte por aquí!</h3>
          <p>Lorem ipsum dolor</p>
        </>
        :
        <p>Anda, pasa</p>
      }

      {/* vip && <h3>¡Qué gusto verte por aquí!</h3> */}

      {/* checkVip() */}

      <h2>Elige tu historia</h2>
      
      <div>
        <div>
          Nombre:
          <input
            type="text"
            onChange={(event) => setTaleName(event.target.value)}
          />
        </div>
        <div>
          Imagen:
          <input
            type="text"
            onChange={(event) => setTaleImage(event.target.value)}
          />
        </div>

        <button onClick={addTale}>Añadir</button>
      </div>
      
      {
        tales.map((tale, index) =>
          <Tale
            key={index}
            tale={tale.tale}
            image={tale.image}
          />
        )
      }
      
      {/*
      <ul>
      { tales.map(item => <li>{item}</li>) }
      </ul>
      */}

      <footer>&copy; Copyright</footer>
    </div>
  )
}

// exports
export default App
