import { Dropdown } from 'react-bootstrap';
import { horarios } from '../services/baseHorarios';
import { useState } from 'react';

export const ScheduleSelector = () => {
  const [horario, setHorario] = useState(horarios[0].value);

  // TODO: Implementar que el segundo horario no pueda ser menor al primero

  const handleHorario = (value) => {
    setHorario(value);
  };
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant='light'
        id='dropdown-basic'
      >
        {horario}
      </Dropdown.Toggle>
      <Dropdown.Menu
        style={{
          maxHeight: '200px',
          overflowY: 'scroll',
        }}
      >
        {horarios.map((horario) => (
          <Dropdown.Item
            key={horario.id}
            onClick={() => handleHorario(horario.value)}
          >
            {horario.value}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};