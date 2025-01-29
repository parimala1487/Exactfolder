trigger OpportunityTrigger on Opportunity (before update) {
    
   if(trigger.isBefore && trigger.isUpdate)
   {
       OpportunityTriggerHandler.handleBeforeUpdateActivities(Trigger.NEW,Trigger.oldMap);
   }
}