import React from 'react';
import './Footer.scss';
import { logo, social  } from '../../assets';

const Footer = () => {
  return (
    <header className='Footer'>
      <div className="div">
        <div className='logoand'>
          <img src={logo} alt="" />
          <img src={social} alt="" />
        </div>
        <hr />
        <div className='footer'>
          <div className='production'>
            <h2>Продукция</h2>
            <h4>Ламинатные тубы</h4>
            <h4>Экструзионные тубы</h4>
            <h4>Другая упаковка</h4>
          </div>
          <div className='production'>
            <h2>Компания</h2>
            <h4>О нас</h4>
            <h4>Наша команда</h4>
            <h4>Сертификаты</h4>
          </div>
          <div className='production'>
          <h2>Разделы</h2>
            <h4> Контакты</h4>
            <h4>Новости</h4>
            <h4>Вакансии</h4>
          </div>
          <div className='production'>
            <h3>Беларусь</h3>
            <h4>+375 (17) 270 53 77</h4>
            <h4>+375 (17) 270 53 78</h4>
            <h3 className='maskva'>Москва</h3>
            <h4>+7 (495) 280 73 44</h4>
            <h4>+7 (495) 280 73 44</h4>
          </div>
          <div className='production'>
          <h3>Беларусь</h3>
            <h4>+375 (17) 270 53 77</h4>
            <h3 className='maskvaa'>Москва</h3>
            <h4>+7 (495) 280 73 44</h4>
          </div>
        </div>
        <div className='lastly'>
          <p>© 2022 Leangroup. All Rights Reserved. <br />
            Разработка и продвижение сайтов SkyWeb.by</p>
        </div>
      </div>
    </header>
  );
};

export default Footer;
