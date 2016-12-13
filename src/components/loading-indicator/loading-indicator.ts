/**
 * Created by colinjlacy on 4/14/16.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'loading-indicator',
    template: require('./html/loading-indicator.html'),
    style: [require('./css/loading-indicator.css')]
})
export class LoadingIndicator {}

export class LoadingPage{
    public loading: boolean;
    constructor(val: boolean) {
        this.loading = val;
    }
    standby() {
        this.loading = true;
    }
    ready() {
        this.loading = false;
    }
}