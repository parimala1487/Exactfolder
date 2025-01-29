import { LightningElement,api } from 'lwc';
import {updateRecord} from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import LEAD_OBJECT from '@salesforce/schema/Lead';
import ID_FIELD from '@salesforce/schema/Lead.Id';
import COMPANY_FIELD from '@salesforce/schema/Lead.Company';
import STATUS_FIELD from '@salesforce/schema/Lead.Status';


export default class UpdateRecordUiRecordApi extends LightningElement {

    @api recordId;
    company;
    status;
    

    handleCompany(event)
    {
        this.company = event.target.value;
    }
    handleLeadStatus(event)
    {
        this.status = event.target.value;
    }

    handleUpdateLead()
    {
        const fields = {};
        fields[ID_FIELD.fieldApiName] = this.recordId;
        fields[COMPANY_FIELD.fieldApiName] = this.company;
        fields[STATUS_FIELD.fieldApiName] = this.status;
        
 
        let recordInput = {fields};

         updateRecord(recordInput).then(result=>{
            const evt = new ShowToastEvent({
                title:'success',
                message:'Record Updated Successfully',
                variant:'success'
            });
            this.dispatchEvent(evt);
         }).catch(error=>{
            const evt = new ShowToastEvent({
                title:'error',
                message:'Error while updating Record',
                variant:'error'
            });
            this.dispatchEvent(evt);
         });

    }


}