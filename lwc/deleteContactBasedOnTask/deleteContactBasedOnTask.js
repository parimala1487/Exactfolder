import { LightningElement ,api,wire} from 'lwc';
import {deleteRecord} from 'lightning/uiRecordApi';
import sendListToGetSpecificID from '@salesforce/apex/RetrieveSpecificWhoId.sendListToGetSpecificID';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import fetchAllContacts from '@salesforce/apex/RetrieveSpecificWhoId.getAllContacts';
import {refreshApex} from '@salesforce/apex';
import { NavigationMixin } from 'lightning/navigation';




export default class DeleteContactBasedOnTask extends NavigationMixin(LightningElement) {


    @api recordId;
    resultId;
    hasData = false;
    displayAllContacts; // To store the wired result
    wiredContactsResult; // To store the wire's raw response


    @wire(sendListToGetSpecificID, { passIdFromLWC: '$recordId' })
    wiredResult({ data, error }) {
        if (data) {
            this.resultId = data;
            this.hasData = true; // Show button when data is present
            console.log('This particular ID:', this.resultId);
        } else if (error) {
            console.error('Error:', error);
        }
    }

   
    @wire(fetchAllContacts)wiredContacts(result) {
        this.wiredContactsResult = result; // Store the wire's raw response for refreshApex
        if (result.data) {
            this.displayAllContacts = result.data; // Assign data to the display property
            console.log('Display All Contacts:', this.displayAllContacts);
        } else if (result.error) {
            console.error('Error fetching contacts:', result.error);
        }
    }

  
    handleDelete()
     {
        console.log('Inside handleDelete:', this.resultId);

        deleteRecord(this.resultId).then(() => {
                // Show success toast
                const evt = new ShowToastEvent({
                    title: 'Success',
                    message: 'Record deleted successfully',
                    variant: 'success',
                });
                this.dispatchEvent(evt);

              //   Refresh the wired data
             return refreshApex(this.wiredContactsResult);
       })
            .then(() => {
                console.log('Contacts refreshed successfully');

               

             // Refresh the split view after a delay
           setTimeout(() => {
                eval("$A.get('e.force:refreshView').fire()");
            }, 1000); // Delay of 1 second

       })
            .catch((error) => {
                // Show error toast
                const evt = new ShowToastEvent({
                    title: 'Failed',
                    message: `Failed to delete record. Error: ${error.body.message}`,
                    variant: 'error',
                });
                this.dispatchEvent(evt);

                console.error('Error deleting record:', error);
            });
    }
    
  

        

        
    

   
}