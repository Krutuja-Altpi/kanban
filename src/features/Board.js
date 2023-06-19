
import React from 'react'
import {BsDot} from 'react-icons/bs'
import {IoAddSharp} from 'react-icons/io5'
import Card from './Card'
import './Board.css'




const Board = (props) => {
  const {color , data , title} = props
  const dividerStyle = {
    borderColor : color
  }
  const buttonStyle = {
    backgroundColor:   `${color}1A`,
    
    
  }
  return (
    <div className='board'>
        <div className='board_top'>
            <div className='board_top_firsthalf'>
               <BsDot color={color}/>
               <h3>{title}</h3>
               <p><span>{data.length}</span></p>
            </div>
            <button className='board_top_secondhalf' style={buttonStyle}>
               <IoAddSharp color={color} />
            </button>
        </div>
       <div className='divider' style={dividerStyle}/>
       <div className='board_cards'>
         {
            data && data.map((item) => {
                return <Card data = {item} key={item.id}/> 
            })
         }
        
       </div>
    </div>
  )
}

export default Board