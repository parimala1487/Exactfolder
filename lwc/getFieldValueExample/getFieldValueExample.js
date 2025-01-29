import { LightningElement,api,wire } from 'lwc';
import {getRecord, getFieldValue,getFieldDisplayValue} from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

let FIELDS = ['Account.Name','Account.Owner.Name','Account.Phone','Account.Industry','Account.AnnualRevenue']

export default class GetFieldValueExample extends LightningElement {


   @api recordId;
    @wire(getRecord,{recordId:'$recordId',fields:FIELDS})account;

    get name(){
        //syntax: getFieldValue(record:Record,field:string)
        return getFieldValue(this.account.data,NAME_FIELD);
     }

     get phone(){
        //syntax: getFieldValue(record:Record,field:string)
        return getFieldValue(this.account.data,PHONE_FIELD);
     }

     get industry(){
        //syntax: getFieldValue(record:Record,field:string)
        return getFieldValue(this.account.data,INDUSTRY_FIELD);
     }

     get annualRevenue(){
        //syntax: getFieldValue(record:Record,field:string)
       // return getFieldValue(this.account.data,ANNUAL_REVENUE_FIELD);

         //syntax : getFieldDisplayValue(record,field)
         return getFieldDisplayValue(this.account.data,ANNUAL_REVENUE_FIELD);


     }

     get owner(){
        //syntax: getFieldValue(record:Record,field:string)
        return getFieldValue(this.account.data,OWNER_NAME_FIELD);
     }


}