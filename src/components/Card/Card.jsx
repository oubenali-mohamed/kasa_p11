import PropTypes from "prop-types"
import styled from "styled-components"
import "../../utils/styles/styles.css"
import { NavLink } from "react-router-dom"

const StyleCard= styled.div`
display: flex;
flex-direction: column;
height: 340px;
width: 340px;
margin-top: 50px;
border-radius: 10px;
margin-right: 35px;
margin-left: 35px;
`

const StyleImage = styled.img`
width: 340px;
heigth: 100%;
border-radius: 10px;
object-fit: cover;
`

const StyleTitle= styled.span`
height: 52px;
width: 300px;
left: 20px;
top: 268px;
border-radius: nullpx;
`

function Card ({title, picture, id}) {
    let detailLink = `/location/${id}`;
    return (
        <StyleCard id="Card">
            <NavLink to={ detailLink }>
                <StyleImage src={picture} alt="Apartment"/>
            </NavLink>
           <StyleTitle>{title} </StyleTitle>
        </StyleCard>
       
        
    )
}
 Card.propTypes={
    title: PropTypes.string,
    picture: PropTypes.string
 }
export default Card