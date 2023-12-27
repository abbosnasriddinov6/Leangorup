import React from 'react';
import './Section6.scss';
import { ecovadis, apple, colors  } from '../../assets';

const Section6 = () => {
  return (
    <header className='Section6'>
      <div className='new'>
        <div className='neword'>
          <h1>Новости</h1>
        </div>
        <div className='newcard'>
          <div className="newcards">
            <div className='imgun'>
              <img className='apple' src={ecovadis} alt="" />
            </div>
            <div className='wordss'>
              <p>28.01.2022</p>
              <h4>ЛеанГрупп серебряный призер EcoVadis!</h4>
            </div>
          </div>
          <div className="newcards">
            <div className='imgun'>
              <img className='apple' src={apple} alt="" />
            </div>
            <div className='wordss'>
              <p>28.01.2022</p>
              <h4>ЛеанГрупп серебряный призер <br /> EcoVadis!</h4>
            </div>
          </div>
          <div className="newcards">
            <div className='imgun'>
              <img className='apple' src={colors} alt="" />
            </div>
            <div className='wordss'>
              <p>28.01.2022</p>
              <h4>ЛеанГрупп серебряный призер EcoVadis!</h4>
            </div>
          </div>
        </div>
        <div className='lastone'>
          <button>Все новости</button>
        </div>
      </div>
    </header>
  );
};

export default Section6;