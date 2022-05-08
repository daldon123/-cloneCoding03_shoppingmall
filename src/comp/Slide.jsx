// import $ from 'jquery'
import {  useEffect, useState } from 'react';
import data from '../data/data'
import Slidein from './Slidein';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Slide = () => {
    const slide = data[0].slide;
    const [move, setmove] = useState(0)
    
    useEffect(()=>{
      let mySlider = setInterval(() => {
        setmove(move - 100)
      }, 5000);
      if(move === -500){setmove(move + 500)}
      if(move === 100){setmove(move - 100)}

      return ()=>{
        clearInterval(mySlider)
      }
    },[move])

    // useEffect(()=>{
    //   if(move = 500){
    //     setmove(move + 500)
    //   }
    // })
    

    console.log(move)
  return (
    <div className='Slide'>
      <div className='Slides' style={{left:`${move}%`}}>
        {   
            slide.map((slide,slideindex)=>(
              <Slidein key={slideindex} slideinfo={slide} setmove={setmove} move={move} />
            ))
        }
      </div>
      <ChevronLeftIcon className='Slide-ChevronLeftIcon' onClick={()=>setmove(move + 100)}/>
      <ChevronRightIcon className='Slide-ChevronRightIcon'onClick={()=>setmove(move-100)}/>
    </div>
  )
}

export default Slide