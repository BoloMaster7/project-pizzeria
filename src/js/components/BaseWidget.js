class BaseWidget{
  constructor(wrapperElement, initialValue){
    const thisWidget = this;

    thisWidget.dom = {};
    thisWidget.dom.wrapper = wrapperElement;

    thisWidget.CorrectValue= initialValue;
  }
  get Value(){
    const thisWidget = this;

    return thisWidget.CorrectValue;
  }

  set Value(value) {
    const thisWidget = this;

    const newValue = thisWidget.parseValue(value);
   
    if ((newValue != thisWidget.CorrectValue  && !isNaN(newValue)) && thisWidget.isValid(newValue)) {
      thisWidget.CorrectValue = newValue;
      thisWidget.announce();
    }
    thisWidget.renderValue();

  }

  setValue(value){
    const thisWidget = this;
    thisWidget.value = value;
  }
  parseValue(value){
    return parseInt(value);
  }
  isValid(value){
    return !isNaN(value);
  }
  renderValue(){
    const thisWidget = this;

    thisWidget.dom.wrapper.innerHTML= thisWidget.value;
  }
  announce() {
    const thisWidget = this;

    const event = new CustomEvent('updated', {
      bubbles: true
    });
    thisWidget.dom.wrapper.dispatchEvent(event);
  }
}
export default BaseWidget;