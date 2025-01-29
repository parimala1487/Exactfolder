import { LightningElement } from 'lwc';
import callImperative from '@salesforce/apex/LwcLearn.getSpecificAccountViaImperative';

export default class RetrieveAccountViaIMperative extends LightningElement {

    AccountName;

    handleChange(event)
    {
       this.AccountName = event.target.value;
    }
    
    handleClick()
    {
        callImperative({accName:this.AccountName}).then(result=>{
          console.log('Data:' ,JSON.stringify(result));
        }).catch(error=>{
          console.error('Error:', error);

        })
    }

}