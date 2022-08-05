import Card from "../Card/Card"
import Apartments from "../../datas/Apartments.json"
import styled from "styled-components"
import "../../utils/styles/styles.css"


const StyleGallery = styled.div`
background: #F7F7F7;
width: 1240px;
margin: auto;
heigth: auto;
display: flex;
flex-direction row;
flex-wrap: wrap;
justify-content: space-between;
margin-top 100px;
border-radius: 25px;
`
function Gallery(){
    return (
        <StyleGallery id="section-gallery">
        {Apartments.map((apart, id)=> ( 
            <Card 
            key={`${apart.title}-${id}`}
            picture={apart.cover}
            title={apart.title}
            id={apart.id}
           />
        ))}
        </StyleGallery>
    )
}
export default Gallery