import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';
import { imageList }  from '../assets/barrido'


const INITIAL_COUNT = 5; // Número de imágenes que se muestran inicialmente

const Pacifico = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [showHint, setShowHint] = useState(true);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + INITIAL_COUNT, imageList.length));
  };

  const handleImageClick = () => {
    setShowHint(false); // Oculta la indicación cuando se hace clic en la imagen
  };

  return (
    <div>
      <GalleryContainer>
        {imageList.slice(0, visibleCount).map((image) => (
          <CardWrapper key={image.id} onClick={handleImageClick}>
            {showHint && (
              <Hint>
                <FontAwesomeIcon icon={faHandPointer} /> Pulsa la imagen
              </Hint>
            )}
            <Card>
              <CardFace className="front">
                <Image src={image.src} alt={image.alt} />
              </CardFace>
              <CardFace className="back">
                <Caption>{image.alt}</Caption>
              </CardFace>
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

const Hint = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 0.875rem;
  border-radius: 5px;
  z-index: 1;
  animation: ${fadeIn} 1s ease-in-out infinite alternate;

  @media (min-width: 769px) {
    display: none;
  }

  svg {
    margin-right: 5px;
  }
`;

const CardWrapper = styled.div`
  perspective: 1000px;
  animation: ${fadeIn} 0.5s ease-in-out;
  position: relative;
`;

const Card = styled.div`
  width: 300px;
  height: 350px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55), box-shadow 0.5s;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &:hover {
    transform: rotateY(180deg);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;

  &.back {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    transform: rotateY(180deg);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.5s ease, filter 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
`;

const Caption = styled.div`
  color: #fff;
  text-align: center;
  font-size: 1rem;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ShowMoreButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: ${(props) => props.theme.pacifico};
  border: none;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s;

  &:hover {
    background-color: #16a111;
    color: #fff;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default Pacifico;
