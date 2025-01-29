import { LightningElement ,api} from 'lwc';

export default class CovidQuickAction extends LightningElement {

   @api recordId;
   @api invoke()
   {
       console.log('Inside invoke');
       window.open("https://en.wikipedia.org/wiki/COVID-19","_Blank");
   }

}