import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

export const SearchForm = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup
        className='mb-3 w-50'
        style={{ margin: '0 auto' }}
      >
        <Form.Control
          placeholder='Buscar por nombre o dirección'
          aria-label='Buscar por nombre o dirección'
          aria-describedby='basic-addon2'
          value={searchQuery}
          onChange={handleInputChange}
        />
        <Button
          type='submit'
          variant='primary'
          id='button-addon2'
        >
          Buscar
        </Button>
      </InputGroup>
    </Form>
  );
};
