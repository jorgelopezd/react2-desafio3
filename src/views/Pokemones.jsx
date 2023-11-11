// codigo3.js
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import '../App.css'

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([])
  const [consultapokemon, Setconsultapokemon] = useState('')
  const navigate = useNavigate()

  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=30&offset=0'

  const infopokemon = async () => {
    try {
      const res = await fetch(url)
      const { results } = await res.json()
      Setconsultapokemon(results)
    } catch (error) {
      console.error('error al momento de buscar la info:', error)
    }
  }

  const handleVerPokemon = () => {
    if (pokemonSeleccionado) {
      navigate(`/pokemones/${consultapokemon}`)
    } else {
      alert('Favor selecionar un pokemon')
    }
  }

  useEffect(() => {
    infopokemon()
  }, [])

  return (
    <>
      <div className='selection'>
        <h1>Seleccione un Pokemon</h1>
        <div className='selection-select'>
          <select
            value={pokemonSeleccionado}
            className='form-select text-center'
            onChange={(e) => Setconsultapokemon(e.target.value)}
          >
            <option className='option' value='disabled'>
              Pokemon
            </option>
            {pokemon.map(({ name }, i) => (
              <option key={i} value={name}>
                {name}
              </option>
            ))}
          </select>
          <Button onClick={handleVerPokemon} className='btnDetalle'>
            Ver detalles
          </Button>
        </div>
      </div>
    </>
  )
}

export default Pokemon;
