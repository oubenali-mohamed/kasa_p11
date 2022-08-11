import * as React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Apartments from "../datas/Apartments.json"
import DropDown from "../components/DorpDown/DropDown"
import styled from 'styled-components'
import settings from "../utils/styles/settings"
import "../utils/styles/styles.css"
import btn_next from "../assets/btn_next.png"

let listImg = []
let description = ""
let equipments = ""
let locality = ""
let titltApart = ""
let tags = ""
let host = ""
let stars = ""


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

  for( let i = 0; i<filterLocation.length; i++){
         listImg = filterLocation[i].pictures
         description = filterLocation[i].description
         equipments = filterLocation[i].equipments 
         locality = filterLocation[i].location
         titltApart = filterLocation[i].title
         tags = filterLocation[i].tags
         host = filterLocation[i].host
         stars = filterLocation[i].rating
 }  
        window.onload = function(){
          let position = 0;
        let containerImage = document.getElementById("container_image")
        let btnPrev = document.getElementById("btn_prev")
        let btnNext = document.getElementById("btn_next")
        btnPrev.onclick = function() {
          if(position <= 0 ) {
            position = listImg.length
          } else {
            position--;
            containerImage.style.transform = "translate("+position*800+"px)" 
            containerImage.style.transition = "all 0.5s ease"     
          }
        }
        btnNext.onclick = function() {
          if(position > listImg.length -1) {
            position = -1
          } else {
            position++;
            containerImage.style.transform = "translate("+position*800+"px)" 
            containerImage.style.transition = "all 0.5s ease"
          }
        }
        function maskArrow(){
          if(listImg.length === 1){
            btnNext.style.display = "none";
            btnPrev.style.display = "none";
          }
        }
        maskArrow()
        }
     return (
      <div>
         <div id='carousel'>
            {listImg.map((img, index) => <div id='container_image' key={index}><img className='image_diaporama' key={index} src = {img} alt = "diaporama"/></div>)}
            <img className='btn' id="btn_next" src = {btn_next} alt="button next" />
            <img className='btn' id="btn_prev" src = {btn_next} alt="button previous" />
          </div>
          <StyleDetail id='containerDetail'>
            <StyleLocality id='styleLocality'>
              <div>
                {<h1>{titltApart}</h1>}
                {<p>{locality}</p>}
              </div>
              <div className='containerTag'>
                {tags.map((tag, index)=> <li className='Tag' key={index}>{tag}</li>)}
              </div>
            </StyleLocality>
            <StyleStars id='styleStars'>
              <div className='detailHost'>
                {<p  className='host'>{host.name}</p>}
                <img className='hostPicture' src = {host.picture} alt = "profile host" />
              </div>
              <div className='stars'> {stars} </div>
            </StyleStars>
          </StyleDetail>
          <StyleContainer id='styleMobileDrop'>
            <StyleDropLocation>
              <DropDown title='Description'>   
                  { <p className='descriptionLocation'>{description}</p> } 
              </DropDown>
            </StyleDropLocation>
            <StyleDropLocation>
              <DropDown title='Équipements'>
                      {<ul className='equipementsLocation'>{equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>}
              </DropDown>
            </StyleDropLocation>
          </StyleContainer>
        <Footer/>
      </div>
    )
}

export default Location