import { templates } from '../settings.js';

class HomePage{
  constructor(element){
    const thisHome = this;
    thisHome.render(element);
    thisHome.initWidgets();
  }

  render(element){
   
    const thisHome = this;
    const generatedHTML = templates.homePage();

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;

  }

  initWidgets(){
    
    //eslint-disable-next-line no-undef 
    const elem = document.querySelector('.main-carousel');
    let Flickity;
    new Flickity( elem, {
      // options
      cellAlign: 'left',
      contain: true,
      prevNextButtons: false,
      autoPlay: 3000,
      wrapAround: true,
    });
  }
}

export default HomePage;