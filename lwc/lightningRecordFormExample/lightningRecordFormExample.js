import { LightningElement,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';

import RATING_FIELD from '@salesforce/schema/Account.Rating';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class LightningRecordFormExample extends LightningElement {

 @api objectApiName;
 @api recordId;

 rating = RATING_FIELD;
 industry = INDUSTRY_FIELD;

 displayFields = [NAME_FIELD,PHONE_FIELD];

 editFormFields = [RATING_FIELD,INDUSTRY_FIELD];

 handleSuccess(event)
 {
    const recid = event.detail.id;
    const evt = new ShowToastEvent({
       title:'success',
       message:'Record created successfully'+recid,
       variant:'success'

    })
    this.dispatchEvent(evt);
 }


}