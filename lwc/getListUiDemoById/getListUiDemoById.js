import { LightningElement,wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';

import CONTACT_OBJECT from '@salesforce/schema/Contact';
export default class GetListUiDemoById extends LightningElement {

    contactRec;

@wire(getListUi,{
     objectApiName:CONTACT_OBJECT,
    listViewId:'003al000009oiNTAAY'
})
    viewContact({data,error})
{
    if(data)
    {
        this.contactRec = data;
        console.log('Data',data);
    }
    else if(error)
    {
        console.log('Error',error);
    }
}


}