import { useState } from 'react'
import vector from "../../assets/vector.png"
import styled from 'styled-components'
import settings from '../../utils/styles/settings'

const StyleBox = styled.div`
background-color: ${settings.primary};
margin-top: 30px;
margin-left: 150px;
width: 80%;
height: 40px;
border-radius: 5px;
`
const StyleTitle = styled.span`
color: #ffffff;
font-family: ${settings.fontFamily};
margin-left: 20px`

const StyleVector = styled.img`
margin-left: 1020px;
margin-top: 15px;
width: 15px;
cursor: pointer;`

const StyleContent = styled.div`
margin-left: 150px;
margin-top: -25px;
width: 80%;
height: 150px;
font-size: 24px;
color: ${settings.primary};
font-family: ${settings.fontFamily};
background: #F7F7F7;
font-style: normal;
border-radius: 5px;
`
function Dropdown({ title, children}) {
  const [isOpen, setIsOpen] = useState(false)
  const rotate = isOpen ? 'rotate(180deg)' : 'rotate(0)'
  const rotation = { transform: rotate, transition: '0.6s ease-in-out' }

  return (
    <div>
      <StyleBox id='dropBox' onClick={(e) => {setIsOpen(!isOpen)}}>
        <StyleTitle id='titleBox'>{title}</StyleTitle>
        <StyleVector id='vectorBox' style={rotation} src= { vector } alt="dropdown"/>
      </StyleBox>
      {isOpen && (
        <StyleContent id='contentBox'>
          {children}
        </StyleContent>
      )}
    </div>
  )
}

export default Dropdown