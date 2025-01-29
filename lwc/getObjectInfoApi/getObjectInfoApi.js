import { LightningElement ,wire} from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import POSITION__c_OBJECT from '@salesforce/schema/Position__c';
export default class GetObjectInfoApi extends LightningElement {

    defaultRecordTypeId;
    
@wire(getObjectInfo,{objectApiName:POSITION__c_OBJECT})resultRecordTypeId({data,error})
{
     if(data)
     {
        this.defaultRecordTypeId = data.defaultRecordTypeId;
        console.log('inside data',data);
     }
     else if(error)
     {
        console.log(error);
     }
}

}