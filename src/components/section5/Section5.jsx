import React from 'react';
import './Section5.scss';
import {  manager1, worker1, worker2, ceo, worker3  } from '../../assets';

const Section5 = () => {
  return (
    <header className='Section5'>
      <div className='team'>
        <div className='our'>
          <h1>Наша </h1>
          <h2>команда</h2>
        </div>
        <div className='workers'>
          <div className="cards">
            <div className='manager'>
              <img src={manager1} alt="" />
            </div>
            <div className='writenoww'>
              <h3 className='one'>Войнич Дарья</h3>
              <p>Заместитель директора по продажам</p>
              <h3 className='number'>+375 (17) 270-53-77 (317)</h3>
            </div>
          </div>
          <div className="cards">
          <div className='manager'>
              <img src={worker1} alt="" />
            </div>
            <div className='writenow'>
              <h3>Мисько Екатерина</h3>
              <p>Начальник отдела сопровождения</p>
              <h3 className='number'>+375 (17) 270-53-77 (317)</h3>
              <h3 className='numbere'> +375 29 112-73-48</h3>
              <h3 className='email'>k.melnichenko@leangroup.by</h3>
            </div>
          </div>
          <div className="cards">
          <div className='manager'>
              <img src={worker2} alt="" />
            </div>
            <div className='writenow'>
             <h3>Дмитроченко Дмитрий</h3>
              <p>Начальник отдела допечатной подготовки</p>
              <h3 className='number'>+375 (17) 270-53-77 (317)</h3>
              <h3 className='numbere'> +375 29 112-73-48</h3>
              <h3 className='email'>dmitrochenko@leangroup.by</h3>
            </div>
          </div>
          <div className="cards">
          <div className='manager'>
              <img src={ceo} alt="" />
            </div>
            <div className='writenow'>
            <h3>Антух Евгений</h3>
              <p>Начальник отдела снабжения</p>
              <h3 className='number'>+375 (17) 270-53-77 (317)</h3>
              <h3 className='numbere'> +375 29 112-73-48</h3>
              <h3 className='email'>j.antuh@leangroup.by</h3>
            </div>
          </div>
          <div className="cards">
          <div className='manager'>
              <img src={worker3} alt="" />
            </div>
            <div className='writenow'>
            <h3>Мисник Елена</h3>
              <p>Специалист по работе с клиентами</p>
              <h3 className='number'>+375 (17) 270-53-77 (317)</h3>
              <h3 className='numbere'> +375 29 112-73-48</h3>
              <h3 className='email'>e.misnik@leangroup.by</h3>
            </div>
          </div>
        </div>
        <div className='work'>
          <button>Наша команда</button>
        </div>
      </div>
    </header>
  );
};

export default Section5;