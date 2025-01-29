import { LightningElement } from 'lwc';
import actCreate from '@salesforce/apex/LwcLearn.buildSampleForm';

export default class BuildForm extends LightningElement {

  AccountName;
  Description;
  Phone;

    handleAccountName(event)
    {
       this.AccountName = event.target.value;
    }
    handleDescription(event)
    {
       this.Description = event.target.value;
    }
    handlePhone(event)
    {
       this.Phone = event.target.value;
    }

    handleClick()
    {

         var dataAll = this.template.querySelectorAll('lightning-input');
         dataAll.forEach(element=>{
            if(element.name == 'name')
                this.AccountName = element.value;
           else if(element.name == "description")
                this.Description = element.value;
         
           else if(element.name == "Phone")
                this.Phone = element.value;
         
         })


        actCreate({accountName:this.AccountName,descr:this.Description,Phoneno:this.Phone}).then(result=>{
            console.log('Data:' ,JSON.stringify(result));
        }).catch(error=>{
            console.error('Error:',error);
        })

         
    }
 



}