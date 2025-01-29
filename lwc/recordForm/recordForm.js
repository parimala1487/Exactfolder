import { LightningElement,api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import MAILINGADDRESS_FIELD from '@salesforce/schema/Contact.MailingAddress';
import LEADSOURCE_FIELD from '@salesforce/schema/Contact.LeadSource';
export default class RecordForm extends LightningElement {



    fields =[NAME_FIELD,PHONE_FIELD,MAILINGADDRESS_FIELD,LEADSOURCE_FIELD];

   @api recordId;
   @api objectApiName;


}