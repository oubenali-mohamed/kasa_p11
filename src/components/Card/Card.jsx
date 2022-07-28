import PropTypes from "prop-types"

function Card ({title, picture}) {
    return (
    <div>
        <img src={picture} alt="Apartment"/>
        <span>{title}</span>
    </div>
    )
}
 Card.propTypes={
    title: PropTypes.string,
    picture: PropTypes.string
 }
export default Card