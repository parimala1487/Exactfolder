trigger ExampleOfRecursiveTrigger on Opportunity (before insert) 
{
    if(Trigger.isBefore && Trigger.isInsert)
    {
        System.debug('Inside trigger');
        OpportunityTriggerHandler.handleBeforeInsertActivities(Trigger.NEW);
    }
}