import { LightningElement ,wire} from 'lwc';
import {getRelatedListInfo} from 'lightning/uiRelatedListApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetRelatedListInfoDemo extends LightningElement {

    relatedListInfo;
   @wire(getRelatedListInfo,{parentObjectApiName:ACCOUNT_OBJECT,relatedListId:'Opportunities'})relatedList({data,error})
   {
     if(data)
     {
        console.log('Data:',data);
        this.relatedListInfo = data.displayColumns;
        console.log('Data:',this.relatedListInfo);
     }
     else if(error)
     {
        console.log('Error',error);
     }
   }
}