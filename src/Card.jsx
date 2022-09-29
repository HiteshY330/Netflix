import React from 'react';


function Card(props){
     console.log(props);
     return(
       <>
     <div className='card'>
       <div className='cards' style={{borderRadius:"5px"}}>
         <img src={props.imgsrc} alt='Pic' className='card__img'/>
         <div className='card__info' style={{padding:"10px"}}>
           <span className='card__category'>{props.title}</span>
           <h3 className='card__title' style={{backgroundColor: "white"}}>{props.sname}</h3>
           <a href={props.link} target="_blank">
             <button style={{cursor:"pointer",padding:"3px",borderRadius:"3px",marginTop:"3px"}}>Watch Now</button>
            </a>
         </div>
       </div>
   
     </div>
   </>
     )
   }
   
export default Card;   