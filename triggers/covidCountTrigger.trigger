trigger covidCountTrigger on Covid_Count__c (before insert,before update) {
    
    if((trigger.isBefore && trigger.isInsert) || (trigger.isBefore && trigger.isUpdate))
    {
        System.debug('inside trigger');
        CovidCountHandler.customSettingObject(Trigger.NEW);
    }

}