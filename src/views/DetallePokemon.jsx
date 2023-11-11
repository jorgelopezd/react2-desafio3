import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import DetalleCard from '../components/DetalleCard';

  const DetallePokemon = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState({});

    const url = 'https://pokeapi.co/api/v2/pokemon';

    const consultardatos = async (name) => {
      try {
        const response = await fetch((`${url}/${name}`));
        const data = await response.json();

        const imageSrc = data.sprites.other.dream_world.front_default;
        const detallesStats = data.stats.map((stat) => ({
          nombre: stat.stat.name,
          valor: stat.base_stat,
        }));

        const tipos = data.types.map((tipo) => tipo.type.name);

        setPokemon({ nombre: name, caracteristicas: detallesStats, image: imageSrc, tipos });
      } catch (error) {
        console.error('error al momento de buscar la info:', error);
      }
    };

    useEffect(() => {
      consultardatos(name);
    }, [name]);

    return (
      <>
        {pokemon && <DetalleCard pokemon={pokemon} />}
        <Link to='/Pokemon' className='linkToPokemon'>
          Volver atras
        </Link>
      </>
    );
  };

  export default DetallePokemon;
