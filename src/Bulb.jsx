import React, { useState } from 'react'
import onbulb from './assets/onbulb.png'
import offbulb from './assets/offbulb.png'


const Bulb = () => {
  const [btnStatus,setBtnStatus] = useState('off')


  return (
    <div>
        <img src={btnStatus == 'on' ? onbulb : offbulb} alt="bulb" />
        <button onClick={()=>{btnStatus == 'on'?setBtnStatus('off') : setBtnStatus('on')}}>{btnStatus == 'on'? 'bulb off' : 'bulb on'}</button>
    </div>
  )
}

export default Bulb