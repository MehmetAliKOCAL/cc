import { useState } from 'react';

export default function HamburgerMenuIcon({
  isMenuOpened,
}) {
  return (
    <div>
      {!isMenuOpened ? (
        <svg
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
        </svg>
      ) : (
        <svg
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path d='M6 18L18 6M6 6l12 12' />
        </svg>
      )}
    </div>
  );
}
