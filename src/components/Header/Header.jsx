import logo from '../../assets/logo.png'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import "../../utils/styles/styles.css"
import settings from '../../utils/styles/settings'

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
const StyleNavLink = styled(NavLink)`
padding: 15px;
font-family: ${settings.fontFamily};
color: ${settings.primary};
text-decoration: none;
font-size: 24px;
margin-right: 50px;
`
function Header() {

  return (
    <StyleHeader className='header-mobil'>
        <NavLink to="/"> 
          <StyledLogo id='logo' src={logo} alt="logo Kasa" />
        </NavLink>
     
      <nav className='navigation-mobil'>
        <StyleNavLink to="/" className = "active-link">Accueil </StyleNavLink>
        <StyleNavLink  to="/about" className = "active-link">A Propos </StyleNavLink>
      </nav>
    </StyleHeader>
  )
}
export default Header
