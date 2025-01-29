import { LightningElement } from 'lwc';

export default class LifeCycleChidComponent extends LightningElement {


   constructor()
   {
      super();
       console.log('call from child constructor');
   }
   connectedCallback()
   {
    console.log('call received from child component call back');
   }

   renderedCallback()
   {
    console.log('call received from child component rendered call back')
   }

disconnectedCallback()
   {
    console.log('call received from child component disconnected call back');
   }


}