import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import LEAD_OBJECT from '@salesforce/schema/Lead';
import FIRSTNAME_FIELD from '@salesforce/schema/Lead.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Lead.LastName';
import COMPANY_FIELD from '@salesforce/schema/Lead.Company';
import LEAD_STATUS_FIELD from '@salesforce/schema/Lead.Status';
import INDUSTRY_FIELD from '@salesforce/schema/Lead.Industry';

export default class CreateRecordUiRecordApi extends LightningElement {

    firstname;
    lastname;
    company;
    status;
    industry;

    handlefirstNameChange(event)
    {
        this.firstname = event.target.value;
    }
    handleLastNameChange(event)
    {
        this.lastname = event.target.value;
    }
    handleCompanyChange(event)
    {
        this.company = event.target.value;
    }
    handleLeadStatusChange(event)
    {
        this.status = event.target.value;
    }
    handleIndustryChange(event)
    {
        this.industry = event.target.value;
    }

    handleCreate()
    {

        const fields = {};
        fields[FIRSTNAME_FIELD.fieldApiName] = this.firstname;
        fields[LASTNAME_FIELD.fieldApiName] = this.lastname;
        fields[COMPANY_FIELD.fieldApiName] = this.company;
        fields[LEAD_STATUS_FIELD.fieldApiName] = this.status;
        fields[INDUSTRY_FIELD.fieldApiName] = this.industry;

        let recordInput = {apiName:LEAD_OBJECT.objectApiName,fields};
        console.log(this.firstname);
        console.log(this.lastname);
        console.log(this.company);
        console.log(this.status);
        console.log(this.industry);
        console.log('Field Values',JSON.stringify(fields));
        
        createRecord(recordInput).then(result=>{
            const evt = new ShowToastEvent({
                title:'success',
                message:'Record Created Successfully',
                variant:'success'
            });
            this.dispatchEvent(evt);
        }).catch(error=>{
            const evt = new ShowToastEvent({
                title:'error',
                message:'Error Creating Record',
                variant:'error'
            });
            this.dispatchEvent(evt);
        });
    }

}