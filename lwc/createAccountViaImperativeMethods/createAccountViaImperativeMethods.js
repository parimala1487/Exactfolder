import { LightningElement } from 'lwc';
import createAct from '@salesforce/apex/LwcLearn.createAccount';
export default class CreateAccountViaImperativeMethods extends LightningElement {

    AccountName;

    handleChange(event)
    {
       this.AccountName = event.target.value;
    }

    handleClick()
    {
        createAct({actName:this.AccountName}).then(result=>{

             console.log('Data:',JSON.stringify(result));
        }).catch(error=>{
            console.error('Error:',error);
        })
        
    }


}