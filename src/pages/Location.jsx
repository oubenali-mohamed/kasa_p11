import * as React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Apartments from "../datas/Apartments.json"
import DropDown from "../components/DorpDown/DropDown"
import styled from 'styled-components'
import settings from "../utils/styles/settings"
import "../utils/styles/styles.css"
// import btn_next from "../assets/btn_next.png"
import { FaStar } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

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
margin-right: 80px;
width: 15%;
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
  const oneLocation = filterLocation[0]   
  // let position = 0;

       /*  function next() {
          if (position >= oneLocation.pictures.length - 1) {
            position = -1;
          } else {
            position++;
            console.log(position)
          }
        }

        function prev() {
          if (position <= 0) {
            position = oneLocation.pictures.length;
          } else {
            position--;
           console.log(position)
          }
        } */
    
 //récupération de la donnée rating
        const allStars = Array(5).fill()
        const colorsStar = {
          pink: "#FF6060",
          gray: "#e5e5e5",
        }
    return (
     <div>
      <Carousel>
      {oneLocation.pictures.map((img, index) => <img className='image_diaporama' key={index} src = {img} alt = "diaporama"/>)}
      </Carousel>

    {/*   <div id='container_image' key={index}></div> */}
       {/*  { <div id='carousel'>
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
         </div>} */}
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
                  {allStars.map((_, index) => (
                    <FaStar 
                    key={index}
                    className="allStars"
                    color={oneLocation.rating > index ? colorsStar.pink : colorsStar.gray}/>
                  ))}
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