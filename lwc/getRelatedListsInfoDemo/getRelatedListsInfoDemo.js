import { LightningElement,wire } from 'lwc';
import {getRelatedListsInfo} from 'lightning/uiRelatedListApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class GetRelatedListsInfoDemo extends LightningElement {

    allRelatedListsData;
    @wire(getRelatedListsInfo,{parentObjectApiName:ACCOUNT_OBJECT})relatedListsInfo({data,error})
    {
        if(data)
        {
            console.log('Related Lists Data:',data);
            this.allRelatedListsData = data.relatedLists;
            console.log('Related Lists Data:',this.allRelatedListsData);
        }
        else if(error)
        {
            console.log('Error',error);
        }
    }
   
}