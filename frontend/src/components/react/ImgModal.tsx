import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import ImageComponent from './ImageComponent';

interface ImgModalProps {
  isOpen: boolean;
  currentIndex: number;
  images: { id: number; url: string; alternativeText: string }[];
  closeModal: () => void;
  nextSlide: () => void;
  prevSlide: () => void;
}

const ImgModal = ({
  isOpen,
  currentIndex,
  images,
  closeModal,
  nextSlide,
  prevSlide,
}: ImgModalProps) => {
  if (!isOpen) return null;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal, nextSlide, prevSlide]);

  return (
    <div
      className='hidden fixed inset-0 z-50 sm:flex items-center justify-center'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      {/* Background overlay */}
      <div
        className='fixed inset-0 bg-black bg-opacity-75 hover:cursor-pointer transition-opacity'
        aria-hidden='true'
        onClick={closeModal}
      ></div>

      {/* Modal content */}
      <div className='relative z-10 max-w-screen-sm lg:max-w-screen-md max-h-[90vh] w-full mx-4 bg-black rounded-lg overflow-hidden shadow-xl flex flex-col'>
        {/* Header with Close button */}
        <div className='flex justify-between items-center p-2 bg-gray-100'>
          <h2 className='text-sm font-medium text-gray-900' id='modal-title'>
            Image {currentIndex + 1} of {images.length}
          </h2>
          <button
            type='button'
            className='text-gray-500 hover:text-gray-700'
            onClick={closeModal}
          >
            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>

        {/* Image */}
        <div className='flex-1 flex items-center justify-center'>
          <ImageComponent
            src={images[currentIndex].url}
            alt={images[currentIndex].alternativeText || 'Gallery Image'}
            loading='lazy'
            className='max-w-sm h-[74vh] md:max-w-screen-sm lg:max-w-screen-md object-contain'
          />
        </div>

        {/* Navigation buttons */}
        <div className='flex justify-between items-center bg-gray-100'>
          <button
            type='button'
            className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 disabled:text-gray-400'
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeftIcon className='h-5 w-5 mr-1' aria-hidden='true' />
            Previous
          </button>
          <button
            type='button'
            className='inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 disabled:text-gray-400'
            onClick={nextSlide}
            disabled={currentIndex === images.length - 1}
          >
            Next
            <ChevronRightIcon className='h-5 w-5 ml-1' aria-hidden='true' />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImgModal;
