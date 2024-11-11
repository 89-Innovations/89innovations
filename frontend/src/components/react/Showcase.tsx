import { useState } from 'react';
import ShowcaseGrid from './ShowcaseGrid';
import ImgModal from './ImgModal';

interface Props {
  images: {
    id: number;
    url: string;
    alternativeText: string;
  }[];
}

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setIsOpen(true);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextSlide = (imagesLength: number) => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % imagesLength);
  };

  const prevSlide = (imagesLength: number) => {
    setCurrentIndex(
      (currentIndex) => (currentIndex - 1 + imagesLength) % imagesLength
    );
  };

  return { isOpen, currentIndex, openModal, closeModal, nextSlide, prevSlide };
};

const Showcase = ({ images }: Props) => {
  const { isOpen, currentIndex, openModal, closeModal, nextSlide, prevSlide } =
    useModal();
  return (
    <div>
      <ImgModal
        isOpen={isOpen}
        currentIndex={currentIndex}
        images={images}
        closeModal={closeModal}
        nextSlide={() => nextSlide(images.length)}
        prevSlide={() => prevSlide(images.length)}
      />
      <ShowcaseGrid images={images} openModal={openModal} />
    </div>
  );
};

export default Showcase;
