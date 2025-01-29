import { LightningElement ,api} from 'lwc';
import {deleteRecord} from 'lightning/uiRecordApi';

export default class DeleteRecordUiRecordApi extends LightningElement {

   @api recordId;

    handleDeleteRecord()
    {
         deleteRecord(this.recordId).then(result=>{
            window.alert('Record deleted successfully');
         }).catch(error=>{
            console.log('Error',error);
         });
            
    }

}