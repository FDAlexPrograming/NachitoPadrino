import React from 'react';
import styled from 'styled-components';
import { Accordion, Card, Carousel, useAccordionButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import images from '../assets';

// Custom Accordion Toggle component
const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <CardHeader onClick={decoratedOnClick}>
      {children}
    </CardHeader>
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
            <StyledCard>
              <Card.Body>
                <Card.Title>Sobre Nosotros</Card.Title>
                <Card.Text>
                  Somos una organización dedicada a rescatar, cuidar y encontrar hogares para gatos necesitados.
                </Card.Text>
              </Card.Body>
            </StyledCard>
            <Accordion alwaysOpen>
              <StyledCard>
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
              </StyledCard>
              <StyledCard>
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
              </StyledCard>
              <StyledCard>
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
              </StyledCard>
              <StyledCard>
                <CustomToggle eventKey="3">Cómo Ayudar</CustomToggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p>Puedes ayudarnos de varias formas, como voluntario, donando suministros o realizando una donación monetaria.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </StyledCard>
            </Accordion>
          </ContentSection>
        </MainContent>
        <Sidebar>
          <h2>Apadrinados</h2>
          <StyledCarousel interval={3000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={images.oliva1}
                alt="First slide"
              />
              <CarouselCaption>
                <h3>Gato 1</h3>
              </CarouselCaption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={images.oliva1}
                alt="Second slide"
              />
              <CarouselCaption>
                <h3>Gato 2</h3>
              </CarouselCaption>
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
  box-shadow:${(props) => props.theme.box_shadow};
  height: 55vh;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 2rem;
    width: 100%;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 1.75rem;
    color: ${(props) => props.theme.secondary};
  }

`;

const StyledCarousel = styled(Carousel)`
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  .carousel-item img {
    margin: 0 auto;
    display: block;
    padding: 10px
  }

  .carousel-control-prev, .carousel-control-next {
    display: none;
  }

  .carousel-item-next, .carousel-item-prev, .carousel-item.active {
    transition: transform 1s ease-in-out;
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
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: ${(props) => props.theme.color};
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

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
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 10px 10px 0 0;
  }

  .accordion {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const StyledCard = styled(Card)`
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardHeader = styled(Card.Header)`
  background-color: ${(props) => props.theme.primary};
  color:  ${(props) => props.theme.negro_blanco};
  transition: background-color 0.3s ease;
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.secondary};
     color:  ${(props) => props.theme.blanco_negro};
  }
`;

const Highlight = styled.span`
  color: ${(props) => props.theme.negro_blanco};
  font-weight: bold;
`;

const CarouselCaption = styled(Carousel.Caption)`
  background: rgba(0, 0, 0, 0.7);
  padding: 0.2rem ;
`;

export default Home;
