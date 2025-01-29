import { LightningElement ,wire} from 'lwc';
import { getPicklistValues} from 'lightning/uiObjectInfoApi';
import {getObjectInfo} from 'lightning/uiObjectInfoApi';
import POSITION__c__FIELD from '@salesforce/schema/Position__c';
import DEPARTMENT_FIELD from '@salesforce/schema/Position__c.Department__c';

export default class GetPicklistValuesDemo extends LightningElement {

  
    picklistValue;

@wire(getObjectInfo,{objectApiName:POSITION__c__FIELD})objectInfo;

@wire(getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:DEPARTMENT_FIELD})
pickListValuesResult;

handlePicklistValueChange(event)
{
    this.picklistValue = event.target.value;
}



}