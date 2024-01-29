'use client'
import './Buttons.css'

function Buttons({message='test'}: {message:string}) {

    return (
    <>
      <div>
        <button className="button" ><div>{message}</div></button>
      </div>
    </>
  )
}

export default Buttons;
