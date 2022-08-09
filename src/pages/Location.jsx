import * as React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Apartments from "../datas/Apartments.json"
import DropDown from "../components/DorpDown/DropDown"
import styled from 'styled-components'
import settings from "../utils/styles/settings"
import "../utils/styles/styles.css"

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
width: 80%;
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
     return (
      <div>
          <div>
            {listImg.map((img, index) => <img key={index} src = {img} alt = "diaporama"/>)}
          </div>
          <StyleDetail>
            <StyleLocality>
              <div>
                {<h1>{titltApart}</h1>}
                {<p>{locality}</p>}
              </div>
              <div className='containerTag'>
                {tags.map((tag, index)=> <li className='Tag' key={index}>{tag}</li>)}
              </div>
            </StyleLocality>
            <StyleStars>
              <div className='detailHost'>
                {<p  className='host'>{host.name}</p>}
                <img className='hostPicture' src = {host.picture} alt = "profile host" />
              </div>
              <div> {stars} </div>
            </StyleStars>
          </StyleDetail>
          <StyleContainer>
            <StyleDropLocation>
              <DropDown title='Description'>   
                  { <p>{description}</p> } 
              </DropDown>
            </StyleDropLocation>
            <StyleDropLocation>
              <DropDown title='Équipements'>
                      {<ul>{equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>}
              </DropDown>
            </StyleDropLocation>
          </StyleContainer>
        <Footer/>
      </div>
    )
}

export default Location