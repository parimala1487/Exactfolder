import { LightningElement,wire,api } from 'lwc';
import {deleteRecord} from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import contactDetails from '@salesforce/apex/DeleteClass.getContactsWithoutActivities';
const cols = [

    {label:'Name', fieldName:'Name'},
    { label: 'Email', fieldName: 'Email'},
    { label: 'Phone', fieldName: 'Phone'},
    {
        type:'button',
        typeAttributes : {
            label:'Delete',
            variant: 'destructive',
            iconName: 'utility:delete',
            iconPosition: 'left',

        },
    }
];

export default class Scenario1 extends LightningElement {

    @api recordId;
    columnsList = cols;
    contactsData;
      wiredAccountList;  

@wire(contactDetails)wiredResult(result)
{
    this.wiredAccountList = result;
    if(result.data)
    {
       this.contactsData = result.data;
       console.log('Data' ,this.contactsData);
    }
    else if(result.error)
    {
        console.log('Error',error);
    }
    
}

handleRowAction(event){
    const actionName = event.detail.action.name;
    const row = event.detail.row;

    if (actionName === 'delete') {
        this.deleteContact(row.Id);
    }
}
    deleteContact(contactId) {
        deleteContact({ contactId })
            .then(() => {
                this.showToast('Success', 'Contact deleted successfully', 'success');
                return refreshApex(this.wiredContacts);
            })
            .catch((error) => {
                console.error('Error deleting contact:', error);
                this.showToast('Error', 'Failed to delete contact', 'error');
            });
    }





showToast(title, message, variant) {
    const event = new ShowToastEvent({
        title,
        message,
        variant,
    });
    this.dispatchEvent(event);
}




handleDelete()
{
   deleteRecord(this.recordId).then(()=>{
   
           refreshApex(this.wiredAccountList);

           
           }).catch(error=>{
   
               console.log('Error',error);
           })
}

   
}