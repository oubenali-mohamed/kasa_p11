import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyleHeader = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 50px;
margin-top: 20px;
`
const StyledLogo  = styled.img`
width: 150px;
height: 50px;
margin-left: 20px;
`
const StyleLink = styled(Link)`
padding: 15px;
color: red;
text-decoration: none;
font-size: 24px;
margin-right: 50px;
`
function Header() {
  return (
    <StyleHeader>
        <NavLink to="/"> 
          <StyledLogo src={logo} alt="logo Kasa" />
        </NavLink>
     
      <nav>
        <StyleLink to="/">Accueil</StyleLink>
        <StyleLink to="/About">A Propos</StyleLink>
      </nav>
    </StyleHeader>
  )
}
export default Header
