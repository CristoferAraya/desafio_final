import { Container, Navbar } from 'react-bootstrap';
import  AvatarDropdown  from './AvatarDropdown';
import { Link } from 'react-router-dom';
import {styles} from '../styles/navigation.css'
;

const Navigation = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand >
          <Link to ='/' className='titulo-navigation'>
          <h1>Peluquerías</h1>
          </Link>
         
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
        
        <Link to='/login'>
        <div className="boton-navigation">
          <button type="button" className="btn btn-primary ">Iniciar sesion</button> 
          </div>
          
        </Link>


            <Link to='/registro' className='links-navigation'>

                <div className="boton-navigation">
              <button type="button" className="btn btn-primary ">Registrar</button>
              </div>

            </Link>

        </Navbar.Collapse>
        <AvatarDropdown />
        <Link to ='/favoriteslist' >
         
          </Link>
      </Container>
    
    </Navbar>
    
  );
  
};

export default Navigation;