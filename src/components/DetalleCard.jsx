import '../App.css'

  const DetalleCard = ({ pokemoncard }) => {
    return (
      <div className='pokemon-details-card'>
        <img src={pokemoncard.image} alt='Pokemon Image' />

        <div className='card-details'>
          <div className='pokemon-name'>Nombre: {pokemoncard.nombre}</div>
          <ul>
            <div>
              {pokemoncard.caracteristicas?.map((caracteristica, index) => (
                <li key={index}>
                  {caracteristica.nombre}: {caracteristica.valor}
                </li>
              ))}
            </div>
          </ul>
          <div className='pokemon-type'>Tipo: {pokemoncard.tipos}</div>
        </div>
      </div>
    );
  };

  export default DetalleCard;
