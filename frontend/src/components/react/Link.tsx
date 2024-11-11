import { cn } from '@/utils/cn';
import React from 'react';
import { sizes, styles } from '@/styles/buttonStyles';

interface Props {
  href: string;
  size?: 'md' | 'lg';
  block?: boolean;
  style?: 'primary' | 'secondary' | 'plain' | 'animated';
  class?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

const Link = ({
  children,
  href,
  block,
  size = 'lg',
  style = 'plain',
  class: className,
  isExternal,
  ...rest
}: Props) => {
  const combinedClassName = cn(
    block && 'w-full',
    sizes[size],
    styles[style],
    className
  );

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : ''}
      {...rest}
      className={combinedClassName}
    >
      {children}
    </a>
  );
};

export default Link;
