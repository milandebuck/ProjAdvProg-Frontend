import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'createtest',
    template: require('')
})
export class CreateClass implements OnInit {
    groupid: number;
    private sub: any;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.groupid = +params['id'];
        });
    }
}