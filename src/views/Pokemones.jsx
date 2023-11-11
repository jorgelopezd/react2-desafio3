import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [consultapokemon, setConsultapokemon] = useState('');
  const navigate = useNavigate();

  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=30&offset=0';

  const infopokemon = async () => {
    try {
      const res = await fetch(url);
      const { results } = await res.json();
      setPokemon(results);
    } catch (error) {
      console.error('error al momento de buscar la info:', error);
    }
  };

  const handleVerPokemon = () => {
    if (consultapokemon) {
      navigate(`/pokemon/${consultapokemon}`);
    } else {
      alert('Favor seleccionar un pokemon');
    }
  };

  useEffect(() => {
    infopokemon();
  }, []);

  return (
    <>
      <div className='selection'>
        <h1>Seleccione un Pokemon</h1>
        <div className='selection-select'>
          <select
            value={consultapokemon}
            className='form-select text-center'
            onChange={(e) => setConsultapokemon(e.target.value)}
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
  );
};

export default Pokemon;
