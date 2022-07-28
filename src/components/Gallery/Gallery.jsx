import Card from "../Card/Card"
import apartments from "../../datas/Apartments.json"

function Gallery(){
    return (
        <div>
        {apartments.map((apart, id)=> (
            <Card 
            key={`${apart.title}-${id}`}
            picture={apart.cover}
            title={apart.title}
           
            />
        ))}
        </div>
    )
}
export default Gallery