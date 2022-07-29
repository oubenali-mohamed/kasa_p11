import logo_footer from "../../assets/logo_footer.png"
import styled from "styled-components"
import "../../utils/styles/styles.css"

const StyleFooter= styled.div`
background-color: black;
height: 200px;
margin-top: 20px;
width: 100%;
`
const StyleLogoFooter= styled.img`
margin-left: 45%;
margin-top: 70px;
`
const StyleParaFooter = styled.p`
color: #ffffff;
margin-left: 42%;
margin-top: 30px;
`
function Footer(){
    return (
        <StyleFooter>
            <StyleLogoFooter id="logoFooter" src={logo_footer} alt="logo du footer"/>
            <StyleParaFooter id="paraFooter">© 2020 Kasa. All rights reserved</StyleParaFooter>
        </StyleFooter>
    )
}
export default Footer