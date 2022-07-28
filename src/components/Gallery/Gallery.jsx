import Card from "../Card/Card"
import apartments from "../../datas/Apartments.json"
import styled from "styled-components"

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
        <StyleGallery>
        {apartments.map((apart, id)=> (
            <Card 
            key={`${apart.title}-${id}`}
            picture={apart.cover}
            title={apart.title}
           
            />
        ))}
        </StyleGallery>
    )
}
export default Gallery