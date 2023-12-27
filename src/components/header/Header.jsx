import React from 'react';
import './Header.scss';
import { logo, onof, smallbuttons  } from '../../assets';

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <div className='navbar'>
          <div className='Logo'>
            <img className='logo' src={logo} alt="" />
          </div>
          <div className='links'>
            <ul>
              <li>Продукция</li>
              <hr />
              <li>Сертификаты</li>
              <hr />
              <li>Наша команда</li>
              <hr />
              <li>О нас</li>
              <hr />
              <li>Новости</li>
              <hr />
              <li>Вакансии</li>
              <hr />
              <li>Контакты</li>
            </ul>
          </div>
          <div className='dark'>
             <img className='onof' src={onof} alt="" />
          </div>
        </div>
      </nav>
      <div className='backround'>
        <div className='back'>
          <div className="words">
            <h3>LEANGROUP - тубы и этикетки</h3>
            <h1>Ламинатные тубы</h1>
            <p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
            <button>Каталог</button>
            <div className='smallbuttons'>
              <img  src={smallbuttons} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
