import React from 'react';
import './Section3.scss';
import {  image6, image7, image8, image9, image10  } from '../../assets';

const Section3 = () => {
  return (
    <header className='Section3'>
      <div className='nasha'>
        <div className='products'>
          <h1>Наша </h1>
          <h2>продукция</h2>
        </div>
        <div className='buttons'>
          <button>Ламинатные тубы</button>
          <button>Экструзионные тубы</button>
          <button>Другая упаковка</button>
        </div>
        <div className='pictures'>
          <img src={image6} alt="" />
          <img src={image7} alt="" />
          <img src={image8} alt="" />
          <img src={image9} alt="" />
          <img src={image10} alt="" />
        </div>
        <div className='onebutton'>
          <button>Перейти в каталог</button>
        </div>
      </div>
    </header>
  );
};

export default Section3;