import { LightningElement } from 'lwc';

export default class Showhide extends LightningElement {

    showhidevar;

    handleShow()
    {
       this.showhidevar=true;
    }
    handleHide()
    {
        this.showhidevar=false;
    }



}