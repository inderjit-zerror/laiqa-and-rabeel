import React from 'react'

const Lamp = ({top, left,translateX, translateY, rotation, name}) => {
  return (
    <div  
    style={{ top: top, left: left,  transform: `translate(${translateX}, ${translateY}) rotateZ(${rotation})`  }} 
    className={`w-30 h-32.5 ${name} flex absolute scale-[0.4]`}
    >
      <img src={`/imgs/newHome/bird.png`} alt="IMG" className='h-full object-cover object-center' />
    </div>
  )
}

export default Lamp