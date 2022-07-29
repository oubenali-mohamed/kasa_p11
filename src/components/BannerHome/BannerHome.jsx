import Banner_Homme from "../../assets/Banner_Home.png"
import styled from "styled-components"
import '../../utils/styles/styles.css'

const StyleBannerHome = styled.div`
width: 1240px;
height: 223px;
background: #000000;
opacity: 0.8;
border-radius: 25px;
margin: auto;
`
const StyleImage = styled.img`
border-radius: 25px;
opacity: 0.7;
`
const StyleTitre = styled.h1`
height: 68px;
width: 705px;
font-family: Montserrat;
position: absolute;
color: #ffffff;
left: 25.9%;
right: 25.14%;
top: 24.32%;
bottom: 69.04%;
font-weight: 500;
font-size: 48px;
`


function BannerHome() {
    return (
      <StyleBannerHome id="Banner">
        <StyleImage  src={Banner_Homme} alt="Banner"/>
        <StyleTitre>Chez vous, partout et ailleurs</StyleTitre>
      </StyleBannerHome>
    )
  }
  
  export default BannerHome
  