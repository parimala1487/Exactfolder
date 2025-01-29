import { LightningElement ,api} from 'lwc';
import {updateRecord} from 'lightning/uiRecordApi';
import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName';
import ID_FIELD from '@salesforce/schema/Opportunity.Id';
import { ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ClosedAction extends LightningElement {

    @api recordId;
@api invoke()
{

    const fields = {};
    fields[ID_FIELD.fieldApiName] = this.recordId;
    fields[STAGENAME_FIELD.fieldApiName] = 'Closed';
   const recordInput = {fields};

   updateRecord(recordInput).then(result=>{
    const evt = new ShowToastEvent({
        title:'success',
        message:'Record Created Successfully',
        variant:'success'
    });
    this.dispatchEvent(evt);
}).catch(error=>{
    const evt = new ShowToastEvent({
        title:'Failed',
    message:'Record Failed to insert',
    variant:'error'
 });
     this.dispatchEvent(evt);
});
  
}

}