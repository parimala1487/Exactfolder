import { LightningElement,wire,api } from 'lwc';
import getMultipleRecords from '@salesforce/apex/LwcLearn.getMultipleRecords';
export default class GetMultipleRecordsFromApex extends LightningElement {

allData;

@api recId;

@wire(getMultipleRecords,{param2:'$recId'}) resultData({data,error})
{
   if(data)
   {
    this.allData = data;
    console.log('Data:',data);
   }
   else if(error)
   {
    console.error('Error:',error);
   }
}




}