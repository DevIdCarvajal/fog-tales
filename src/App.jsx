// imports
import { useEffect, useState } from 'react'

import './App.css'

import Header from './components/Header/Header'
import Tale from './components/Tale/Tale'

//import { validateEmail } from './utils/validations'

// logic
const App = () => {

  // initialization
  let year = 2034
  // let vip = true

  const [vip, setVip] = useState(true)
  const [tales, setTales] = useState([])
  const [taleName, setTaleName] = useState('')
  const [taleImage, setTaleImage] = useState('')
  const [lightTheme, setLightTheme] = useState(true)
  const [errorMessage, setErrorMessage] = useState(false)
  const [totalTales, setTotalTales] = useState(0)

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

  const validateTale = () => {
    // Lógica de validación
    if (
      taleName &&
      taleName.length < 20 &&
      taleImage
    ) {
      addTale(taleName, taleImage)
      setErrorMessage(false)
    }
    else {
      setErrorMessage(true)
    }
  }

  const addTale = (taleName, taleImage) => {
    // Añadir los datos de los inputs al array
    setTales([...tales, {
      id: tales.length + 1,
      tale: taleName,
      image: taleImage
    }])
  }
  
  // Caso 1: Cuando se carga la primera vez
  //   Mounting (componentDidMount)
  useEffect(() => {
    fetch('https://www.thecocktaildbp.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          console.log('Respuesta de red OK pero respuesta de HTTP no OK');
        }
      })
      .then((data) => {
        setTales(data.drinks.slice(0, 5).map((tale) => {
          return {
            id: tale.idDrink,
            tale: tale.strDrink,
            image: tale.strDrinkThumb
          }
        }))
      })
      .catch((error) => {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      })
  }, [])

  // Caso 2: Va a dispararse para cualquier actualización (incluida la primera)
  //   Updating genérico ("componentDidUpdate")
  useEffect(() => {
    // ...
  })

  // Caso 3: Va a dispararse para cualquier actualización (incluida la primera) solamente para aquellos datos que decidamos
  //   Updating específico ("componentDidUpdate")
  useEffect(() => {
    setTotalTales(tales.length)
  }, [tales]) // dependencies

  // renderization
  return (
    <div className={`App ${lightTheme ? 'future' : 'past'}`}>
      <Header light={{lightTheme, setLightTheme}} />
      
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

        { errorMessage && <p>Los datos no están bien</p> }

        <button onClick={validateTale}>Añadir</button>
      </div>
      
      {
        tales.length > 0
        ?
        <>
          {
            tales.map((tale, index) =>
              <Tale
                key={index}
                tale={tale.tale}
                image={tale.image}
              />
            )
          }
          
          <p>Total: {totalTales}</p>
        </>
        :
        <p>No hay cuentos</p>
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
