import * as React from 'react'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Apartments from "../datas/Apartments.json"
import DropDown from "../components/DorpDown/DropDown"
import styled from 'styled-components'
import settings from "../utils/styles/settings"
import "../utils/styles/styles.css"
import btn_next from "../assets/btn_next.png"


const StyleLocality = styled.div` 
color: ${settings.primary};
display:flex;
flex-direction: column;
margin-left: 80px;
`
const StyleDetail = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
const  StyleStars = styled.div`
display: flex;
flex-direction: column;
width: 15%;
margin-right: 80px;
`
const StyleContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
const StyleDropLocation = styled.div`
width: 100%;
margin-left: -30px;
margin-right: 100px;`


function Location() {
  const { id } = useParams()
  const filterLocation = Apartments.filter(apart => apart.id === id) 
  const oneLocation = filterLocation[0];
  let position = 0;
  
  if(!oneLocation){
   return <Navigate to="*"/> // route vers le composant Error
  }

  function next() {
          const divImgNext = document.getElementById("container_image")
          const imgLogement = oneLocation.pictures[position]
          if (position >= oneLocation.pictures.length - 1) {
            position = 0;
          } else {
            position++;
            if (divImgNext.firstChild != null) {
              divImgNext.removeChild(divImgNext.firstChild);
            }
            const imgNext = document.createElement("img")
            imgNext.setAttribute("src",imgLogement);
            divImgNext.appendChild(imgNext);
          }
        }

        function prev() {
          const divImgNext = document.getElementById("container_image")
          const imgLogement = oneLocation.pictures[position]
          if (position <= 0) {
            position = oneLocation.pictures.length -1;
          } else {
            position--;
            if (divImgNext.firstChild != null) {
              divImgNext.removeChild(divImgNext.firstChild);
            }
            const imgNext = document.createElement("img")
            imgNext.setAttribute("src",imgLogement);
            divImgNext.appendChild(imgNext);
          }
        }
    
 //récupération de la donnée rating
        const allStars = Array(5).fill(0)

    return (
     <div>
          { <div id='carousel'>
              {oneLocation.pictures.map((img, index) => <div id='container_image' key={index}><img className='image_diaporama' key={index} src = {img} alt = "diaporama"/></div>)}
              <button id= "btn_prev" className="previous" onClick={prev}> 
                {oneLocation.pictures.length > 1 &&
                  <img src={btn_next} alt="boutton précédent" /> 
              }
              </button>
              <button id='btn_next' className="next" onClick={next} >  
                {oneLocation.pictures.length > 1 &&
                  <img src={btn_next} alt="boutton suivant" />
              }
              </button>
         </div>} 
          <StyleDetail id='containerDetail'>
            <StyleLocality id='styleLocality'>
              <div>
                {<h1>{oneLocation.title}</h1>}
                {<p>{oneLocation.location}</p>}
              </div>
              <div className='containerTag'>
                {oneLocation.tags.map((tag, index)=> <li className='Tag' key={index}>{tag}</li>)}
              </div>
            </StyleLocality>
            <StyleStars id='styleStars'>
              <div className='detailHost'>
                {<p  className='host'>{oneLocation.host.name}</p>}
                <img className='hostPicture' src = {oneLocation.host.picture} alt = "profile host" />
              </div>
              <div className='stars'> 
                 { allStars.map((star, index) => (oneLocation.rating > index ? <i className="fas fa-star pinkStar" key={index}></i> : <i className="fas fa-star" key={index}></i>) )}
              </div>
            </StyleStars>
          </StyleDetail>
          <StyleContainer id='styleMobileDrop'>
            <StyleDropLocation>
              <DropDown title='Description'>   
                  { <p className='descriptionLocation'>{oneLocation.description}</p> } 
              </DropDown>
            </StyleDropLocation>
            <StyleDropLocation>
              <DropDown title='Équipements'>
                      {<ul className='equipementsLocation'>{oneLocation.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>}
              </DropDown>
            </StyleDropLocation>
          </StyleContainer>
        <Footer/>
      </div>
    )
}

export default Location