import { LightningElement,wire,api } from 'lwc';
import {getRelatedListCount} from 'lightning/uiRelatedListApi';
export default class GetRelatedListCOunt extends LightningElement {

    @api recordId;
    relatedListCount;
@wire(getRelatedListCount,{
    parentRecordId:'$recordId', // Id of the parent record that u want to get relatedlist for
    relatedListId:'Opportunities' //Api name of a related list object such as contacts,opportunitys etc..
})listCountHandler({data,error})
{
    if(data)
    {
        console.log('Inside data',JSON.stringify(data));
        this.relatedListCount = data.count;
    }
    else if(error)
    {
        console.log('Error',error);
    }
}

}