import React from 'react';
import './Section1.scss';
// import { Opa, Oqcellphone  } from '../../assets';

const Section1 = () => {
  return (
    <section className='section1'>
      <div className='body'>
        <div className='company'>
          <h2>О компании </h2>
          <h1>LEANGROUP</h1>
        </div>
        <div className='divide'>
            <div className='video'>
              <div className='vid'></div>
            </div>
            <div className='text'>
               <div className='write'>
                  <p>Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по           
                    производству ламинатных  и экструзионных туб.
                  </p>
                  <p>
                    Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является                собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с               поставщиками для контроля и поддержания качества производимой нами продукции.
                  </p>
                  <p>
                     С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы. 
                  </p>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;