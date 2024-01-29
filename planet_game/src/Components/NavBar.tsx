import { ReactNode } from 'react';
import './NavBar.css'

function NavBar({message = 'test', children}: {message:string, children: ReactNode}) {

  return (
    <>
      <div className='Nav'>
        <table>
          <tr>
            <th>
              {children}
            </th>
            <th>
              <h1> Planets Game </h1>
            </th>
            <th>
              <p>{message}</p>
            </th>
          </tr>
          
        </table>
        
      </div>
    </>
  )
}

export default NavBar;
