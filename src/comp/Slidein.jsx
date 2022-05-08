import React from 'react'

const Slidein = (props) => {

  return (
    <div className='Slide-box' style={{backgroundColor:props.slideinfo.bgColor}}  >
        <div className='Slide-box-in'>
            <img className='Slide-box-in-img' src={props.slideinfo.image} alt="slideimg" />
            <div className='Slide-box-in-text'>
                <h1 style={{color:props.slideinfo.fontColor}}>{props.slideinfo.title}</h1>
                <p style={{color:props.slideinfo.fontColor}}>{props.slideinfo.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default Slidein