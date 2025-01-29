import { LightningElement,wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
export default class GetListUiDemo extends LightningElement {


    actRecord;
   // @wire(getListUi,{objectApiName:CONTACT_OBJECT,listViewApiName:'BirthdaysThisMonth'})
    @wire(getListUi,{objectApiName:CONTACT_OBJECT,listViewId:'00Bal0000018W9VEAU'})
    listViewAccounts({data,error})
    {
        if(data)
        {
            console.log('Inside Data',data);
           this.actRecord = data.records.records;
        }
        else if(error)
        {
            console.log(error);
        }
    }
 
}