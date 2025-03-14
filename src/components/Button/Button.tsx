import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ className = '', ...delegated }: ButtonProps) {
  return (
      <button className={`${styles.button} ${className}`} {...delegated} />
  );
}

export default Button;