import { LightningElement } from 'lwc';
import LightningPrompt from 'lightning/prompt';
import LightningAlert from 'lightning/alert';
export default class LightningPromptDemo extends LightningElement {

//async and await
  /* async promptHandler()
    {
     const result = await  LightningPrompt.open({

            message:"Please enter your age"
        })
        console.log(result);
    }  */
    
        promptHandler()
        {
         LightningPrompt.open({
                message:"Please enter your age",
                label:"Check your voting Eligibility",
                theme:"success",
                defaultValue:30 // if u want to show default value
            }).then(result=>{
                console.log(result);
                if(result && Number(result)>18){
                    this.alertHandler("Hurray you are eligibile","Success!!","success");
                  
                }
                else
                {
                    this.alertHandler("Sorry!! you are not eligibile","Error!!","error");
                    
                }
            })
            
        }  

        alertHandler(message,label,theme){
            LightningAlert.open({
                message:message,
                label:label,
                theme:theme
            })
        }

    }