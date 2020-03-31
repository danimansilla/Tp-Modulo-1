import React from 'react';
import './Nav.css';

function Nav(){
    return(
        <div >
              <ul>
            <li><a  href="#">Home</a></li>
            {/* <li><a href="#">Contacto</a></li> */}
            <li><a href="#" className="active">Registro</a></li>
          </ul>
        </div>

    );
}

export default Nav;
