import BannerAbout from "../components/BannerAbout/BannerAbout"
import Footer from "../components/Footer/Footer"
import DropDown from "../components/DorpDown/DropDown"
import styled from "styled-components"

const StylePara = styled.p`
padding-top: 50px;
margin-left: 50px;
margin-right: 50px;`

function About() {
  const contents = [
    {
      "title": "Fiabilité",
      "content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      "title": "Respect",
      "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      "title": "Service",
      "content": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      "title": "Sécurité",
      "content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ]
  return (
    <div>
      <BannerAbout/>
        <div>
          {contents.map((text, id) => (
              <DropDown key={id} title={text.title}>
                {<StylePara id="contentPara">{text.content}</StylePara>}
              </DropDown>
            ))}
        </div>
      <Footer/>
   </div>
  )
}
export default About 
  

