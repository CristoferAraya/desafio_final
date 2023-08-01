import { Dropdown, Image } from 'react-bootstrap';

 const PerfilView = () => {
  return (
    <Dropdown align={'end'}>
      <Dropdown.Toggle
        variant='transparent'
        id='dropdown-basic'
      >
        {/* TODO: Cambiar imagen */}
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
            Juanito Pérez
          </span>
        </Dropdown.Header>
        {/* TODO: Cambiar href por Link */}
        <Dropdown.Item
          href='#action/3.1'
          className='border-bottom'
        >
          Editar Perfil
        </Dropdown.Item>
        <Dropdown.Item
          href='#action/3.2'
          className='border-bottom'
        >
          Mis Reservas
        </Dropdown.Item>
        <Dropdown.Item
          href='#action/3.3'
          className='border-bottom'
        >
          Mis Favoritos
        </Dropdown.Item>
        <Dropdown.Item href='#action/3.4'>Cerrar Sesión</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default PerfilView;