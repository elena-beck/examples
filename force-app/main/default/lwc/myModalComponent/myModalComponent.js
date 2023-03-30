import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class NewModalComponent extends LightningModal {

    handleOkay() {
        this.close('okay');
    }
}