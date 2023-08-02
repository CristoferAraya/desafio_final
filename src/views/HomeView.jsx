import { FeaturedCard } from '../components/FeaturedCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { basePeluquerias } from '../services/basePeluquerias';
import { SearchForm } from '../components/SearchForm';
import {styles} from '../styles/home.css';

 const HomeView = () => {
  const [peluquerias] = useState(basePeluquerias);
  const [search, setSearch] = useState(peluquerias);

  const handleSearch = (searchQuery) => {
    const searchResults = peluquerias.filter((peluqueria) => {
      return (
        peluqueria.nombre
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(
            searchQuery
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
          ) ||
        peluqueria.direccion
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(
            searchQuery
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
          )
      );
    });
    setSearch(searchResults);
  };

  return (
    <>
      <Container
       className='mt-5 mb-5'>
        <SearchForm onSearch={handleSearch} />
        <h3>Destacadas</h3>
        <Row>
          {search.map((peluqueria, index) => (
            <Col
              key={index}
              lg={6}
              md={12}
              sm={12}
            >
              <FeaturedCard
                key={peluqueria.id}
                peluqueria={peluqueria}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};


export default HomeView;