import {FormControl} from "@angular/forms";
import {Component,EventEmitter} from "@angular/core";

import { SearchService } from "./../../services/search.service"


@Component({
    selector: 'livesearch',
    template: require("./html/livesearch.component.html"),
    styles: [ require("./css/livesearch.component.css") ]
})
export class LiveSearch {
    items: Array<string>;
    term = new FormControl();
    public selectEvent=new EventEmitter();
    constructor(private searchService: SearchService) {

    }

    search(term){
        this.term.valueChanges
            .debounceTime(400)
            .subscribe(term => this.searchService.search(term).subscribe(items => this.items = items));
    }

    select(student){
        this.term=student.name;
        this.selectEvent.emit(student);
    }
}