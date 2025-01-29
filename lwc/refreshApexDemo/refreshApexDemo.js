import { LightningElement,wire } from 'lwc';
import getRefreshActApex from '@salesforce/apex/RefreshApexDemoDetails.getActDetails';
import {deleteRecord} from 'lightning/uiRecordApi';
import {refreshApex} from '@salesforce/apex';
const cols = [  
    
    {label:'Account Name',fieldName:'Name'},
    {label:'Type',fieldName:'Type'},
    {label:'Industry',fieldName:'Industry'},
    {label:'Phone',fieldName:'Phone'}

];

export default class RefreshApexDemo extends LightningElement {

    columnsList = cols;
accounts;
error;
selectedRecord;
wiredAccountList;

@wire(getRefreshActApex)returnActDetails(result)
{
   this.wiredAccountList = result;
    if(result.data)
    {
        console.log('insert');
        this.accounts = result.data;
        console.log('Accounts',this.accounts);
    }
    else if(result.error)
    {
        console.log('Error',error);
        this.error = result.error;
    }
}
handleSelection(event)
{
    if(event.detail.selectedRows.length > 0)
    {
        
        this.selectedRecord = event.detail.selectedRows[0].Id;
        console.log('Selected Record',this.selectedRecord);
    }
}


    handleDeleteAccount()
    {
        deleteRecord(this.selectedRecord).then(()=>{

            console.log('inside delete Account');
           refreshApex(this.wiredAccountList);
           setTimeout(() => {
            eval("$A.get('e.force:refreshView').fire();");
       }, 1000);
             console.log('wiredList',this.wiredAccountList);

        }).catch(error=>{

            console.log('Error',error);
        })
    }

}