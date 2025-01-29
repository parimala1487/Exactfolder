import { LightningElement ,wire,api} from 'lwc';
import {getRelatedListRecords} from 'lightning/uiRelatedListApi';

export default class GetRelatedListRecords extends LightningElement {

    relatedListRecords;
@api recordId;
@wire(getRelatedListRecords,{
 parentRecordId:'$recordId',
 relatedListId:'Contacts', //Api name of the related lists
 fields:['Contact.Name','Contact.Id']  //optional field
})listRecordsHandler({data,error})
{
    if(data)
    {
        console.log('Inside data',JSON.stringify(data));
        this.relatedListRecords = data.records;
    }
    else if(error)
    {
        console.log('Error',error);
    }
}


}