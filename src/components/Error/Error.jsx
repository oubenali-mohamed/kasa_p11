import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyleSpan = styled.span`
position: absolute;
left: 35%;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 288px;
line-height: 142.6%;
display: flex;
align-items: center;
text-align: center;
color: #FF6060;
`
const StyleTitre = styled.h1`
position: absolute;
left: 25%;
top: 65%;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 142.6%;
display: flex;
align-items: flex-end;
color: #FF6060;
`
const StyleLink = styled(NavLink)`
position: absolute;
left: 40.14%;
right: 40.14%;
top: 81.93%;
bottom: 15.53%;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
display: flex;
align-items: flex-end;
text-decoration-line: underline;
color: #FF6060;
`
function Error() {
  return (
    <div>
      <StyleSpan>404</StyleSpan>
      <StyleTitre>Oups! La page que vous demandez n'existe pas</StyleTitre>
      <StyleLink to="/">Retourner sur la page d’accueil</StyleLink>
    </div>
  )
}

export default Error
