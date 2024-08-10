// src/components/Gallery.js
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import images from '../assets'; // Importa las imágenes desde el archivo de índice

// Lista de imágenes desde tus assets
const imageList = [
  { id: 1, src: images.oliva1, alt: 'Descripción de imagen 1' },
  { id: 2, src: images.oliva2, alt: 'Descripción de imagen 2' },
  { id: 3, src: images.oliva3, alt: 'Descripción de imagen 3' },
  { id: 4, src: images.oliva4, alt: 'Descripción de imagen 4' },
  { id: 5, src: images.oliva5, alt: 'Descripción de imagen 5' },
  { id: 6, src: images.oliva6, alt: 'Descripción de imagen 6' },
  { id: 7, src: images.oliva7, alt: 'Descripción de imagen 7' },
  { id: 8, src: images.oliva8, alt: 'Descripción de imagen 8' },
  { id: 9, src: images.oliva9, alt: 'Descripción de imagen 9' },
  { id: 10, src: images.oliva10, alt: 'Descripción de imagen 10' },
  { id: 11, src: images.oliva11, alt: 'Descripción de imagen 11' },
  { id: 12, src: images.oliva12, alt: 'Descripción de imagen 12' },
  { id: 13, src: images.oliva13, alt: 'Descripción de imagen 13' },
  { id: 14, src: images.oliva14, alt: 'Descripción de imagen 14' },
  { id: 15, src: images.oliva15, alt: 'Descripción de imagen 15' },
  // Agrega más imágenes según sea necesario
];

const INITIAL_COUNT = 5; // Número de imágenes que se muestran inicialmente

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + INITIAL_COUNT, imageList.length));
  };

  return (
    <div>
      <GalleryContainer>
        {imageList.slice(0, visibleCount).map((image) => (
          <CardWrapper key={image.id}>
            <Card>
              <Front>
                <Image src={image.src} alt={image.alt} />
              </Front>
              <Back>
                <Caption>{image.alt}</Caption>
              </Back>
            </Card>
          </CardWrapper>
        ))}
      </GalleryContainer>
      {visibleCount < imageList.length && (
        <ButtonContainer>
          <ShowMoreButton onClick={handleShowMore}>Ver más</ShowMoreButton>
        </ButtonContainer>
      )}
    </div>
  );
};

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 5rem;

  @media (max-width: 768px) {
    gap: 15px;
    padding: 3rem 0 7rem;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const CardWrapper = styled.div`
  perspective: 1000px; /* Controla el efecto de perspectiva */
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Card = styled.div`
  width: 250px;
  height: 350px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  cursor: pointer;

  &:hover {
    transform: rotateY(180deg); /* Giro de 180 grados en el eje Y */
  }
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const Caption = styled.div`
  color: #fff;
  text-align: center;
  font-size: 0.875rem;
  padding: 20px;
  border-radius: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 35px;
`;

const ShowMoreButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color:  ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  font-weight: 600;

  &:hover {
    background-color: ${(props) => props.theme.secondary};
    color: #fff;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default Gallery;
