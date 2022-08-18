import { useState } from 'react'
import vector from "../../assets/vector.png"
import styled from 'styled-components'
import settings from '../../utils/styles/settings'

const StyleBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: ${settings.primary};
margin-top: 30px;
width: 85%;
margin-left: 105px;
height: 40px;
border-radius: 5px;
`
const StyleTitle = styled.span`
color: #ffffff;
font-family: ${settings.fontFamily};
margin-left: 20px;
margin-bottom: 10px;
`
const StyleVector = styled.img`
margin-right: 20px;
width: 15px;
cursor: pointer;
margin-bottom: 10px;
`
const StyleContent = styled.div`
margin-left 105px;
width: 85%;
margin-top: -25px;
height: auto;
font-size: 24px;
color: ${settings.primary};
font-family: ${settings.fontFamily};
background: #F7F7F7;
border-radius: 5px;
`
function Dropdown({ title, children}) {
  const [isOpen, setIsOpen] = useState(false)
  const rotate = isOpen ? 'rotate(180deg)' : 'rotate(0)'
  const rotation = { transform: rotate, transition: "0.5s ease-out"}

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