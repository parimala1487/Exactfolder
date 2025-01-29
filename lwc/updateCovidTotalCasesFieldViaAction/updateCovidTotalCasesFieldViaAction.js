import { LightningElement,api } from 'lwc';
import {updateRecord} from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import ID_FIELD from '@salesforce/schema/Covid_Count__c.Id';
import ACTIVECASES_FIELD from '@salesforce/schema/Covid_Count__c.Active_Cases__c';
export default class UpdateCovidTotalCasesFieldViaAction extends LightningElement {

 
 @api recordId;
@api invoke()
{
    const fields = {};
    fields[ID_FIELD.fieldApiName] = this.recordId;
    fields[ACTIVECASES_FIELD.fieldApiName] = 380;
    const recordInput = {fields};
    console.log('Record Input',+recordInput);
    updateRecord(recordInput).then(result=>{
        const evt = new ShowToastEvent({
            title:'success',
            message:'Record Updated Successfully',
            variant:'success'
        });
        this.dispatchEvent(evt)
    }).catch(error=>{
        const evt = new ShowToastEvent({
            title:'Error',
            message:'Error Updating Record',
            variant:'error'
        });
        this.dispatchEvent(evt);
    });
}
 

}