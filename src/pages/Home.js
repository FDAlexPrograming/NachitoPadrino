import React from 'react';
import styled from 'styled-components';
import { Accordion, Card, Carousel, useAccordionButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import images from '../assets';

// Custom Accordion Toggle component
const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <Card.Header onClick={decoratedOnClick} style={{ cursor: 'pointer' }}>
      {children}
    </Card.Header>
  );
};

const Home = () => {
  return (
    <BackgroundContainer>
      <PageContainer>
        <MainContent>
          <HeroSection>
            <h1>
              Bienvenidos a la Asociación de <Highlight>Nachito Padrino</Highlight>
            </h1>
            <p>Trabajamos para mejorar la vida de los gatos en nuestra comunidad.</p>
          </HeroSection>
          <ContentSection>
            <Card>
              <Card.Body>
                <Card.Title>Sobre Nosotros</Card.Title>
                <Card.Text>
                  Somos una organización dedicada a rescatar, cuidar y encontrar hogares para gatos necesitados.
                </Card.Text>
              </Card.Body>
            </Card>
            <Accordion alwaysOpen>
              <Card>
                <CustomToggle eventKey="0">Nuestros Servicios</CustomToggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ul>
                      <li>Adopción de gatos</li>
                      <li>Programas de esterilización</li>
                      <li>Atención veterinaria</li>
                      <li>Voluntariado</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <CustomToggle eventKey="1">Próximos Eventos</CustomToggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <ul>
                      <li>Feria de Adopción - 15 de Agosto</li>
                      <li>Campaña de Esterilización - 22 de Agosto</li>
                      <li>Charla sobre Cuidado de Gatos - 29 de Agosto</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <CustomToggle eventKey="2">Testimonios</CustomToggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <blockquote>
                      <p>"Gracias a la Asociación de Animales Gatunos, encontramos al compañero perfecto para nuestra familia."</p>
                      <cite>- Juan Pérez</cite>
                    </blockquote>
                    <blockquote>
                      <p>"El trabajo que hacen es increíble. Nos ayudaron a rescatar y cuidar a un gato abandonado."</p>
                      <cite>- María López</cite>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <CustomToggle eventKey="3">Cómo Ayudar</CustomToggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p>Puedes ayudarnos de varias formas, como voluntario, donando suministros o realizando una donación monetaria.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </ContentSection>
        </MainContent>
        <Sidebar>
          <h2>Apadrinados</h2>
          <StyledCarousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={images.oliva1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Gato 1</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={images.oliva1}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Gato 2</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </StyledCarousel>
        </Sidebar>
      </PageContainer>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  background-image: url(${images.nachito_logo}), linear-gradient( ${(props) => props.theme.background},  ${(props) => props.theme.background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: -35rem top;
  background-blend-mode: overlay;
   @media (max-width: 768px) {
   background-position: -15rem top;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  height: 1250px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    height: auto;
  }
`;

const Sidebar = styled.div`
  padding: 2rem;
  border-radius: 10px;
  flex: 1;
  margin-left: 2rem;
  transition: 0.3s;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 2rem;
    width: 100%;
  }

  h2 {
    margin-bottom: 2rem;
  }

  h3 {
    background: #444;
    border-radius: 50px;
  }
`;

const StyledCarousel = styled(Carousel)`
  border-radius: 10px;
  overflow: hidden;
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 1px 4px 0px #000;
  }

  .carousel-item img {
    border-radius: 10px;
  }
`;

const MainContent = styled.div`
  flex: 3;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    color: ${(props) => props.theme.secondary};

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: ${(props) => props.theme.color};

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const ContentSection = styled.section`
  display: grid;
  gap: 1.5rem;

  .card {
    margin-bottom: 1.5rem;
  }

  .accordion {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Highlight = styled.span`
  color: ${(props) => props.theme.secondary};
  font-weight: bold;
`;

export default Home;
