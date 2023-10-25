
import { useState } from 'react';
import './App.css'
import phrases from "./phrases.json"
function App() {

    let colorArray =
     ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

  const  indexRamdon = Math.floor(Math.random() *phrases.length);
  const  colorRamdon = Math.floor(Math.random() *colorArray.length);
  const [index,setIndex]=useState(indexRamdon)

  document.body.style.background=`${colorArray[colorRamdon]}`

   const changePhrase=()=>{
   const  indexRamdon = Math.floor(Math.random() *phrases.length);
   const  colorRamdon = Math.floor(Math.random() *colorArray.length);
   setIndex(indexRamdon+1)
   setColor(colorArray[colorRamdon])
   }
  return (
    <>
    <main className='container-main'>

      <div className='box'>

      <i className="fas fa-quote-left comillas" style={{color:`${colorArray[colorRamdon]}`}}></i> 
      <p style={{color:`${colorArray[colorRamdon]}`}}>{phrases[index].quote}</p>
      <p style={{color:`${colorArray[colorRamdon]}`}}><span style={{color:"gray"}}>Author: </span>{phrases[index].author}</p>
      <div className='bottom-container'>
      <button onClick={changePhrase}><i className="fa-solid fa-angle-right" style={{color:`${colorArray[colorRamdon]}`}}></i></button>
      </div>
      
      </div>

    </main>
  
    </>
  )
}

export default App

