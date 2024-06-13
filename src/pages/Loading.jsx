import React from 'react';
import Logo from '../assets/Amoir Logo.svg';
import { BarLoader } from 'react-spinners';

const Loading = () => {
  return (
    <>
      <section className='w-full h-full flex items-center justify-center absolute'>
        <div className='grid place-items-center'>
          <img src={Logo} alt="Amoir Logo" className='h-5 mb-3' />
          <BarLoader
            color={'#24e6bf'}
            width={150}
          />
        </div>
      </section>
    </>
  )
}

export default Loading;