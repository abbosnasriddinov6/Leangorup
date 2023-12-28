// import React from 'react';

// const Backtop = () => {
//   return (
//     <header className='Backtop'>
//         <img className='backtop' onClick={handleBacktop} src={backtop} alt="" />
//     </header>
//   );
// };

// export default Backtop;

import React, { Component } from 'react';
import { backtop  } from '../../assets';
import './Backtop.scss';
export class Backtop extends Component {
  render() {
    const { handleBacktop } = this.props;
    return (
      <div className='abbosbek'>
        <img onClick={handleBacktop} src={backtop} className="backtop">
          
        </img>
      </div>
    );
  }
}

export default Backtop;