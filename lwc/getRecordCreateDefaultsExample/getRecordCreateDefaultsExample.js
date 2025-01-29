import { LightningElement,wire } from 'lwc';
import {getRecordCreateDefaults} from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
export default class GetRecordCreateDefaultsExample extends LightningElement {


@wire(getRecordCreateDefaults,{objectApiName:CONTACT_OBJECT})wiredResult({data,error})
{
    if(data)
    {
        console.log('Data',JSON.stringify(data));
    }
    else if(error)
    {
        console.log('Error',error);
    }
}
   
}