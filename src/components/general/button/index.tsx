import React from 'react';
import Link from 'next/link';

import { ButtonContainer, LinkContainer } from './styles'

interface ButtonProps {
  type?: 'button' | 'link';
  full?: boolean;
  onClick?: () => void;
  color?: 'secondary' | 'primary' | 'terciary' | 'success' | 'danger' | 'warning';
  href?: string;
  as?: string;
  squared?: boolean;
  ariaLabel?: string
}

export const Button: React.FC<ButtonProps> = ({
  children, 
  type = 'button',
  full = false,
  color = 'secondary',
  squared = false,
  href,
  onClick,
  as,
  ariaLabel
}) => {

  const renderButton = () => (
    <ButtonContainer 
      full={full} 
      color={color} 
      link={type === 'link'} 
      squared={squared} 
      className="ll-button" 
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </ButtonContainer>
  )

  const renderLink = () => (
    <Link as={as} href={href}>
      <LinkContainer 
        full={full}
        color={color}
        link={type === 'link'}
        squared={squared}
        className="ll-button"
        aria-label={ariaLabel}
      >
          {children}
      </LinkContainer>
    </Link>
  )

  return href ? renderLink() : renderButton();
}