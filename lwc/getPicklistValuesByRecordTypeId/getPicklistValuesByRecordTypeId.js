import { LightningElement,wire } from 'lwc';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class GetPicklistValuesByRecordTypeId extends LightningElement {

    picklistvalue;
    shippingGeocodeAccuracy;
  //ratingvalues;
    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})objectInfo;

  @wire(getPicklistValuesByRecordType,{objectApiName:ACCOUNT_OBJECT,recordTypeId:'$objectInfo.data.defaultRecordTypeId'})
  accountPicklist({data,error}){
   // alert('inside 2nd wire');
    if(data)
    {
        console.log(data);
         this.shippingGeocodeAccuracy =  data.picklistFieldValues.ShippingGeocodeAccuracy;
    }
    if(error)
    {
        console.log(error);
    }
  }

  handleChange(event)
  {
      this.picklistvalue = event.detail.value;
  }



}