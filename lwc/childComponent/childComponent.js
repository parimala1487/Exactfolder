import { api, LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {

 @api childVar="child variable value";


 handleClick()
 {
    this.dispatchEvent(new CustomEvent('firstcusteve',{detail:{name:'parimala'}}));
 }

}