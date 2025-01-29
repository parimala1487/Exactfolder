import { LightningElement ,track,api} from 'lwc';
import comboxboxdisplay from '@salesforce/apex/ComboboxLWC.getAccountList';
import getAcctRelatedContacts from '@salesforce/apex/ComboboxLWC.getAccountRelatedContacts';


export default class ComboBoxExampleLWC extends LightningElement {

@track flag=false;
@track value='';
@track optionArray=[];
@api relatedContact;
@track  columns =[

     {label:'First Name',fieldName:'FirstName'},
     {label:'Last Name',fieldName:'LastName'}

];

get options()
{
    return this.optionArray;
}

handleAccountChange(event)
{
    this.flag=true;
    this.value=event.target.value;
    getAcctRelatedContacts({actId:this.value})
      .then(result=>{
         this.relatedContact = result;  

      })
      .catch(error=>{
         console.log('Error Occured');
      });

}


connectedCallback()
{
    comboxboxdisplay()
       .then(result=>{

         console.log(result.length());
         /*
          let arr=[];
          for(var i=0;i<result.length();i++)
          {
             //alert(result[i].Name+' '+result[i].value);

              arr.push({label:result[i].Name,value:result[i].Id});
          } */
          this.optionArray = result;
       })
       .catch(error=>{
            console.log('Error' ,error);

       })
}


}