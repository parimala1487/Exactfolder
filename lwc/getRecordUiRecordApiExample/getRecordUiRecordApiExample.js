import { LightningElement,api,wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';


export default class GetRecordUiRecordApiExample extends LightningElement {


    @api recordId;
    result = {};

@wire(getRecord,{recordId:'$recordId',fields:[NAME_FIELD,OWNER_NAME_FIELD,PHONE_FIELD,INDUSTRY_FIELD,ANNUAL_REVENUE_FIELD]})
wiredRecord({data,error})
{
   if(data)
   {
    //here fields is list of objects,so i convert those fields into a array using object.keys(fields);
    //Object.keys(fields) -- pulls all the fields in the form of Array;
    const { fields } = data;
    Object.keys(fields).forEach(item =>{

        let value = fields[item] && fields[item].displayValue ? fields[item].displayValue:fields[item].value;
        this.result = {...this.result,[item]:value};
    })
    console.log(JSON.stringify(data));
   }
   if(error)
   {
    console.error(error);
   }

}}