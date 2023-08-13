import { Dropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

 const AvatarDropdown = () => {
  return (
    <Dropdown align={'end'}>
      <Dropdown.Toggle
        variant='transparent'
        id='dropdown-basic'
      >
        <Image
          src='https://img.freepik.com/vector-premium/peluqueria-perros-gatos-simbolo-peluqueria-canina-simbolo-peluqueria-animales_662695-70.jpg?w=740'
          roundedCircle
          width={40}
          height={40}
        />
      </Dropdown.Toggle>
      <Dropdown.Menu className='p-2'>
        <Dropdown.Header>
          <Image
            src='https://img.freepik.com/vector-premium/peluqueria-perros-gatos-simbolo-peluqueria-canina-simbolo-peluqueria-animales_662695-70.jpg?w=740'
            roundedCircle
            width={40}
            height={40}
          />

          <span
            className='ms-2'
            style={{
              verticalAlign: 'middle',
              lineHeight: '40px',
              color: '#000',
              textTransform: 'uppercase',
              fontWeight: 'bold',
            }}
          >
            Usuario
          </span>
        </Dropdown.Header>
        
        <Dropdown.Item
          as={Link}
          to={'/favoritos'}
          className='border-bottom'
        >
          Mis Favoritos
        </Dropdown.Item>
        <Dropdown.Item
          as={Link}
          to={'/historial'}
          className='border-bottom'
        >
          Historial de Reservas
        </Dropdown.Item>
        {/* <Dropdown.Item
          as={Link}
          to={'/mis-comentarios'}
          className='border-bottom'
        >
          Mis Comentarios
        </Dropdown.Item> */}
        
        <Dropdown.Item
          as={Link}
          to={'/mis-peluquerias'}
          className='border-bottom'
        >
          Mis Peluquerías
        </Dropdown.Item>
        <Dropdown.Item
          as={Link}
          to={'/PerfilEdit'}
          className='border-bottom'
        >
          Editar perfil
        </Dropdown.Item>
        <Dropdown.Item
          href='#action/3.7'
          className='border-bottom'
        >
       
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AvatarDropdown;