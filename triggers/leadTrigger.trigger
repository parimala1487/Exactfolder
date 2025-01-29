trigger leadTrigger on Lead (after insert) {
    
    if(Trigger.isAfter && Trigger.isInsert)
    {
        leadHandler.leadAfterInsertActivities(Trigger.NEW);
    }

}