import { LightningElement, wire } from 'lwc';
import callingApex from '@salesforce/apex/LwcLearn.callApexFromLWC';
export default class WireExample extends LightningElement {

@wire(callingApex,{param1:'Passing parameter from LWC to APEX'}) resultdata({data,error}){
    if(data)
    {
        console.log('Data',data);
    }
       
    else if(error)
    {
        console.error('Error',error);
    }
      
}


}