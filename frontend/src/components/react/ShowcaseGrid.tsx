import { useCallback, useEffect, useRef, useState } from 'react';
import ImageComponent from './ImageComponent';

interface Props {
  images: {
    id: number;
    url: string;
    alternativeText: string;
  }[];
  openModal: (id: number) => void;
}

const ShowcaseGrid = ({ images, openModal }: Props) => {
  const [visibleImages, setVisibleImages] = useState(images.slice(0, 9)); // Initial number of images
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const [hasMore, setHasMore] = useState(images.length > 9); // Check if there are more images to load
  const imagesPerLoad = 9; // Number of images to load each time

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore) {
        // Load more images
        const currentLength = visibleImages.length;
        const isMore = currentLength < images.length;
        const nextImages = isMore
          ? images.slice(currentLength, currentLength + imagesPerLoad)
          : [];
        setVisibleImages((prevImages) => [...prevImages, ...nextImages]);
        setHasMore(currentLength + imagesPerLoad < images.length);
      }
    },
    [hasMore, images, visibleImages.length]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [handleObserver]);
  return (
    <div className='max-w-screen-md lg:mb-32 mx-auto p-4 sm:p0'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-8 mt-16'>
        {visibleImages.map(({ url, alternativeText: alt }, idx) => {
          // Calculate the index of the image in the original images array
          const imageIndex = images.findIndex(
            (img) => img.url === visibleImages[idx].url
          );

          return (
            <div
              className='aspect-h-4 aspect-w-4 hover:cursor-pointer hover:shadow hover:scale-95 transition-all duration-300'
              key={imageIndex}
              onClick={() => openModal(imageIndex)}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <ImageComponent
                src={url}
                alt={alt || '89 Innovations'}
                loading='lazy'
                className='object-cover rounded-lg'
              />
            </div>
          );
        })}
      </div>
      {hasMore && (
        <div
          ref={loadMoreRef}
          className='h-10 flex justify-center items-center'
        >
          <div className='flex items-center space-x-2'>
            <div className='h-5 w-5 animate-spin rounded-full border-2 border-gray-400 border-t-accent'></div>
            <span className='text-text-secondary font-medium'>
              Loading more...
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowcaseGrid;
