import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <div>
      <img src={logo} alt="" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/About">A Propos</Link>
      </nav>
    </div>
  )
}
export default Header
