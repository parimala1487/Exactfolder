import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {

isVisible = true;
constructor()
{
   super();  // becoz it initializes all the things inside the component
    console.log('Call Received from Parent COnstructor');
}

connectedCallback()
{
    console.log('Call received from Parent connected call back');
}

renderedCallback()
{
    console.log('call received from Parent rendered call back');
}
errorCallback()
{
    console.log('call received from error call back');
}

disconnectedCallback()
   {
    console.log('call received from parent disconnected call back');
   }


handleClick()
{
   if(this.isVisible == true)
   {
       this.isVisible = false;
   }
   else
   {
    this.isVisible = true;
   }
}

}