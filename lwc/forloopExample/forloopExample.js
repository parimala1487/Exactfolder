import { LightningElement } from 'lwc';

export default class ForloopExample extends LightningElement {


  box =[];

  connectedCallback()
  {
     this.box.push('Apple1');
     this.box.push('Apple2');
     this.box.push('Apple3');
     this.box.push('Apple4');
     this.box.push('Apple5');
  }




}