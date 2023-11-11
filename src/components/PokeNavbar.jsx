import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import logolacacion from '../assets/imgs/iconpokemon.svg'
import '../App.css'

const PokeNavbar = () => {
  return (
    <Navbar className='navbarpoke'>
      <Navbar.Brand>
        <img src={logolacacion} width='50px' alt='logo de pokelocacion' />
      </Navbar.Brand>

      <div className='pokelink d-flex links'>
        <NavLink className='nav-link' activeClassName='active' to='/home'>
          Home
        </NavLink>
        ----
        <NavLink className='nav-link' activeClassName='active' to='/Pokemon'>
          Pokemones
        </NavLink>
      </div>
    </Navbar>
  )
}

export default PokeNavbar
