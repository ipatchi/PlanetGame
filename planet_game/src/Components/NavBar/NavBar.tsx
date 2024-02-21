import { ReactNode } from 'react';
import './NavBar.css';

const NavBar = ({
  title,
  message,
  children,
}: {
  title?: string;
  message?: string;
  children?: ReactNode;
}) => {
  return (
    <>
      <div className="Nav">
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <th className="navChildren">{children}</th>
              <th>
                <h1>{title}</h1>
              </th>
              <th>
                <p>{message}</p>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NavBar;
