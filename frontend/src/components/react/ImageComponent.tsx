import { getStrapiMedia } from '@/utils/strapi';
import React, { useState } from 'react';

interface ImageComponentProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  width?: number;
  quality?: string;
  format?: string;
  loading?: 'lazy' | 'eager';
}

const ImageComponent = ({
  src,
  alt = 'Image',
  width = 800,
  quality = 'auto',
  format = 'auto',
  loading = 'lazy',
  ...props
}: ImageComponentProps) => {
  const widths = [400, 800, 1200, 1600, 2000, 2400];

  const srcSet = widths
    .map(
      (w) =>
        `${getStrapiMedia(src)?.replace('/upload/', `/upload/w_${w},q_${quality},f_${format}/`)} ${w}w`
    )
    .join(', ');

  const lowQualitySrc = getStrapiMedia(src)?.replace(
    '/upload/',
    `/upload/e_blur:200,q_1/`
  );

  const optimizedSrc = getStrapiMedia(src)?.replace(
    '/upload/',
    `/upload/w_${width},q_${quality},f_${format},dpr_auto/`
  );

  const [imgSrc, setImgSrc] = useState(lowQualitySrc);

  // Handle image load event to swap to full-quality
  const handleImageLoad = () => {
    setImgSrc(optimizedSrc);
  };

  return (
    <img
      src={imgSrc}
      srcSet={srcSet}
      sizes='(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw'
      alt={alt}
      loading={loading}
      onLoad={handleImageLoad}
      {...props}
    />
  );
};

export default ImageComponent;
