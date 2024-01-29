'use client'
import './Buttons.css'

function Buttons({message:string}) {

  return (
    <>
      <div>
        <button className="button" type="button">{message}</button>
      </div>
    </>
  )
}

export default Buttons;
