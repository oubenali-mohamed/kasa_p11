import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <div>
      <span>404</span>
      <h1>Oups! La page que vous demandez n'existe pas</h1>
      <NavLink to="/">Retourner sur la page d’accueil</NavLink>
    </div>
  )
}

export default Error
