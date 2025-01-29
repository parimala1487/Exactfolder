import { LightningElement, wire } from 'lwc';
import getCntDetails from '@salesforce/apex/LwcLearn.getSpecificContacts';

const columnsDetails = [

   {label:'Contact Name',fieldName:'Name'},
   {label:'Contact Phone',fieldName:'Phone'},
   {label:'Contact Email',fieldName:'Email'}

];

export default class LightningDataTable1 extends LightningElement {

    columnsList = columnsDetails;
    dataList;


    connectedCallback()
    {
        getCntDetails()
         .then(result=>{
             this.dataList =result;
         })
         .catch(error=>{
             console.log('Error',error);
         })
    }

  /*

    @wire(getCntDetails) result({error,data})
    {
        if(data)
        {
            console.log('Data',data);
            this.dataList = data;
        }
        else if(error)
        {
            console.log('Error',error);
        }
    }
         */

}