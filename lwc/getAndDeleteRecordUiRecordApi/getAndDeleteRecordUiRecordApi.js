import { LightningElement,wire,api } from 'lwc';
import {getRecord,deleteRecord} from 'lightning/uiRecordApi';


import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
import ACCOUNT_OWNER from '@salesforce/schema/Account.Owner.Name';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';

const FIELDS = [ACCOUNT_NAME,ACCOUNT_PHONE,ACCOUNT_INDUSTRY,ACCOUNT_OWNER]

export default class GetAndDeleteRecordUiRecordApi extends LightningElement {

    @api recordId;
    accountName;
    industry;
    phone;
    owner;
    accountId;
    accountDetail;

    @wire(getRecord,{recordId:'001al00001USobBAAT',fields:FIELDS})result({data,error})
    {
        if(error)
        {
            console.log('Error',JSON.stringify(error));
        }
        else if(data)
        {
            this.accountDetail = data;
            console.log('Data',JSON.stringify(this.accountDetail));
             this.accountId = this.accountDetail.id;
             this.accountName = this.accountDetail.fields.Name.value;
             this.industry = this.accountDetail.fields.Industry.value;
             this.phone =   this.accountDetail.fields.Phone.value;
             this.owner = this.accountDetail.fields.Owner.displayValue;


        }
    }

    handleDelete()
    {
        deleteRecord(this.accountId).then(result=>{
            window.alert('Record Deleted');
        }).catch(error=>{
            console.log('Error',JSON.stringify(error));
        })
    }
}