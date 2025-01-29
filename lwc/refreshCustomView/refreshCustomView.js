import { LightningElement,api } from 'lwc';
import getAccountRating from '@salesforce/apex/RefreshController.getAccountRating';
import {registerRefreshHandler} from 'lightning/refresh';
import {unregisterRefreshHandler} from 'lightning/refresh';
export default class RefreshCustomView extends LightningElement {

    ratingValue;
@api recordId;
refreshHandlerId;

connectedCallback()
{
    this.refreshHandlerId = registerRefreshHandler(this,this.refreshHandler);
    this.fetchRating();
}

disconnectedCallback()
{
    unregisterRefreshHandler(this.refreshHandlerId);
}

refreshHandler()
{
    console.log("something has changed");
    return new Promise(resolve=>{
        this.fetchRating(); //if any change happens on the standard view,it will immediately listen and it
                            // will call fetchRating method again so that we will get the updated value

        resolve(true);
    })
}
 
  fetchRating()
  {
    getAccountRating({"accountId":this.recordId}).then(response=>{
        console.log(response);
        this.ratingValue = response[0].Rating;
    }).catch(error=>{
        console.error(error);
    })
   
  }

}