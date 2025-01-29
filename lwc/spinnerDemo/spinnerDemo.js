import { LightningElement } from 'lwc';

export default class SpinnerDemo extends LightningElement {

    showOne =false;
    handleSpinner()
    {
        this.showOne = true;
    }


}