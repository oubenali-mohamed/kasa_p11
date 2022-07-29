import Banner_About from "../../assets/Banner_About.png"
import styled from "styled-components"
import "../../utils/styles/styles.css"

const StyleBannerAbout = styled.div`
width: 1240px;
height: 223px;
background: #000000;
opacity: 0.8;
border-radius: 25px;
margin: auto;
`
const StyleImage = styled.img`
border-radius: 25px;
opacity: 0.7;`


function BannerAbout() {
    return (
      <StyleBannerAbout id="Banner">
         <StyleImage src={Banner_About} alt="Banner"/>
      </StyleBannerAbout>
    )
  }
  
  export default BannerAbout
  