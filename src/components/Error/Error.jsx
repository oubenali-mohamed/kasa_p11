import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import "../../utils/styles/styles.css"
import settings from '../../utils/styles/settings'

const StyleSpan = styled.span`
position: absolute;
left: 35%;
font-family: ${settings.fontFamily};
font-weight: 700;
font-size: 288px;
display: flex;
align-items: center;
text-align: center;
color: ${settings.primary}
`
const StyleTitre = styled.h1`
position: absolute;
left: 25%;
top: 65%;
font-family: ${settings.fontFamily};
font-weight: 500;
font-size: 36px;
display: flex;
color: ${settings.primary}
`
const StyleLink = styled(NavLink)`
position: absolute;
left: 40.14%;
right: 40.14%;
top: 81.93%;
bottom: 15.53%;
font-family: ${settings.fontFamily};
font-size: 18px;
display: flex;
align-items: flex-end;
text-decoration-line: underline;
color: ${settings.primary}
`
function Error() {
  return (
    <div>
      <StyleSpan id='error'>404</StyleSpan>
      <StyleTitre id='msgError'>Oups! La page que vous demandez n'existe pas</StyleTitre>
      <StyleLink to="/" id="lienHome">Retourner sur la page d’accueil</StyleLink>
    </div>
  )
}

export default Error
