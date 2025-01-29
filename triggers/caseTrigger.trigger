trigger caseTrigger on Case (before insert) {
    
    if(trigger.isBefore && trigger.isInsert)
    {
        caseHandler.handleBeforeInsertActivities(Trigger.NEW);
    }
    
}