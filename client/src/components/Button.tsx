import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  color: 'black' | 'white';
  onClick?: () => void;
  children: React.ReactNode;
}

function Button({ color, onClick, children }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${color === 'black' ? styles.black : styles.white}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
