import { LightningElement } from 'lwc';

export default class BuildBasicForm extends LightningElement {

    name;
    email;
    phone;


    handleOnClick()
    {
       
       var loop =  this.template.querySelectorAll("lightning-input");
       alert('outside error');
       loop.forEach(function(element){

        alert('Button is clicked');
           if(element.name == 'Name')
             this.name = element.value;
        else if(element.name == 'Email')
            this.email = element.value;
        else(element.name == 'Phone')
           this.phone = element.value;

       },this);

       alert('Name:' +this.name +'Email:' +this.email+'Phone:' +this.phone);
    }


}