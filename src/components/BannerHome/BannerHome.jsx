import Banner_Homme from "../../assets/Banner_Home.png"
import styled from "styled-components"

const StyleBannerHome = styled.div`
width: 1240px;
height: 223px;
border: 1px solid red;
background: #000000;
mix-blend-mode: darken;
opacity: 0.8;
border-radius: 25px;
margin: auto;

`
const StyleImage = styled.img`
border-radius: 25px;
opacity: 0.7;
width: 100%;
height: 100%;
`

const StyleTitre = styled.h1`
height: 68px;
width: 705px;
font-family: Montserrat;
text-align: left;
position: absolute;
color: #ffffff;
left: 25.9%;
right: 25.14%;
top: 24.32%;
bottom: 69.04%;
font-weight: 500;
font-size: 48px;
line-height: 142.6%;
display: flex;
align-items: flex-end;
`


function BannerHome() {
    return (
      <StyleBannerHome>
        <StyleImage src={Banner_Homme} alt="Banner"/>
        <StyleTitre>Chez vous, partout et ailleurs</StyleTitre>
      </StyleBannerHome>
    )
  }
  
  export default BannerHome
  