import { LightningElement ,wire} from 'lwc';
import callApexMethod from '@salesforce/apex/LwcLearn.callApexFromLWC';

export default class Usingwiretogetdatafromapex extends LightningElement {


   Name;


  @wire(callApexMethod,{param1:'001al00001T06dhAAB'}) retrunresult({data,error})
{
    if(data)
    {
        this.Name = data.Name;
        console.log('Data:',data);
    }
    else if(error)
    {
        console.log('Error:',error);
    }
}
}