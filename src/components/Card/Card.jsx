import PropTypes from "prop-types"
import styled from "styled-components"

const StyleDiv= styled.div`
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
function Card ({title, picture}) {
    return (
        <StyleDiv>
            <StyleImage src={picture} alt="Apartment"/>
            <StyleTitle>{title}</StyleTitle>
        </StyleDiv>
    )
}
 Card.propTypes={
    title: PropTypes.string,
    picture: PropTypes.string
 }
export default Card