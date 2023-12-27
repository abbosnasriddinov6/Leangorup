import React from 'react';
import './Section2.scss';
import {  left, right, image1, image2, image3, image4, image5, smallbuttons  } from '../../assets';

const Section2 = () => {
  return (
    <header className='section2'>
      <div className='leftside'>
        <img className='left' src={left} alt="" />
      </div>
      <div className='section'>
         <div className='quality'>
           <h1>Качество продукции подтверждают</h1>
           <h2>сертификаты</h2>
         </div>
         <div className='documents'>
           <img className='images' src={image1} alt="" />
           <img className='images' src={image2} alt="" />
           <img className='images' src={image3} alt="" />
           <img className='images' src={image4} alt="" />
           <img className='images' src={image5} alt="" />
         </div>
         <div className='butons'>
            <img src={smallbuttons} alt="" />
         </div>
      </div>
      <div className='rightside'>
        <img className='right' src={right} alt="" />
      </div>
    </header>
  );
};

export default Section2;