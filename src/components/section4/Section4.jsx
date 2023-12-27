import React from 'react';
import './Section4.scss';
import { tel, name  } from '../../assets';

const Section4 = () => {
  return (
    <header className='Section4'>
      <div className="bigone">
        <div className='words'>
          <h1>Получить подробную</h1>
          <h2>информацию</h2>
        </div>
        <p>Просто заполните форму, наш менеджер свяжется <br /> с вами в ближайшее время</p>
        <div className='inputs'>
          <img src={name} alt="" />
          <input type="name" placeholder='Ваше имя...' />
          <img className='tel' src={tel} alt="" />
          <input type="tel" placeholder='+375 (29) 0000000' />
        </div>
        <input className='text' type="text" placeholder='Комментарий...' />
        <div className='onebutton'>
          <button>Получить информацию</button>
        </div>
      </div>
    </header>
  );
};

export default Section4;