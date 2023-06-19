import React from 'react'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {BsChatSquareDots , BsFillFolderFill} from 'react-icons/bs'
import profiles from '../assets/Group 633.png'
import trial from '../assets/unsplash_MicqqGyDQ6w.png'
import './Card.css'
const Card = ({data}) => {
    const {priority , title , info , img} = data
  return (
    <div className='card'>
        <div className='card-top'>
           <div className='chip'>
              <p>{priority}</p>
           </div>
           <BiDotsHorizontalRounded/>
        </div>
        <div className='card-body'>
          <h4>{title}</h4>
          {info ? <p>Brainstorming brings team members' diverse experience into play</p> : <img src={img} alt=''/>}
        
        </div>
        <div className='card-footer'>
           <div className='card-footer-profile'>
               <img src= {profiles} alt='profiles'/>
           </div>
           <div className='card-footer-interactions'>
              <div className='card-footer-singleinteraction'>
                <BsChatSquareDots/>
                <p>12 comments</p>
              </div>
              <div className='card-footer-singleinteraction'>
                <BsFillFolderFill/>
                <p>0 files</p>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Card