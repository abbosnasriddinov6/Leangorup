import React, {Component} from 'react';
import {  Header, Footer, Section1, Section2, Section3, Section4, Section5, Section6, Backtop   } from './../../components';

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      darkMode: false,
    };
  }
  handleBacktop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  render() {
    const { darkMode } = this.state;
    return (
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Footer/>
        <Backtop handleBacktop={this.handleBacktop} />
      </div>
    );
  }
  }




    
   

export default Home;
// export default App;
