import { LightningElement } from 'lwc';
import callToImperative from '@salesforce/apex/LwcLearn.imperativeMethod';
export default class ImperativeMethodCall extends LightningElement {




    handleClick()
    {

        callToImperative().then(result=>{
            console.log('Data:', JSON.stringify(result));
        }).catch(error=>{
            console.error('Error:' ,error);
        })


    }




}