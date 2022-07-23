import { NavLink } from 'react-router-dom'
function Error() {
  return (
    <div>
      <h1>Oups Cette page n'existe pas</h1>
      <NavLink to="/">Retourner sur la page d’accueil</NavLink>
    </div>
  )
}

export default Error
