'use client'
import './Buttons.css'
import Buttonv2 from './buttonv2';

function Buttons() {
    return (
    <>
      <div>
        <Buttonv2 
            children = "small text!"
            type = "small"
            onClick={() => alert('small click')}
        />
        <Buttonv2
            children = "large text!"
            type='large'
            onClick={() => alert("LARGE CLICK")}
        />
      </div>
    </>
  )
}

export default Buttons;
