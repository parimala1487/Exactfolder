import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {


   parentVariable="parent variable value";


   handleCustomEvent(event)
   {
      alert('Child to parent:' +event.detail.name);
   }

}