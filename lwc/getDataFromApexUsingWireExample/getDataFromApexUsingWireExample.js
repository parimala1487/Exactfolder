import { LightningElement ,wire} from 'lwc';
import contactData from '@salesforce/apex/getContacts.getContactDetails';

export default class GetDataFromApexUsingWireExample extends LightningElement {

showData;

@wire(contactData)result(data,error)
{
   if(data)
   {
    console.log('inside' ,data);
    this.showData = JSON.stringify(data);
   }
   else if(error)
   {
    console.log('Error',error);
   }
}



}