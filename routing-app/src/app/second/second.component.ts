import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-second',
    templateUrl: './second.component.html',
    styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
    id = '';

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => console.log('using queryParams:', params.name));
        this.route.queryParamMap.subscribe(params => {
            console.log('using queryParamMap:', params);
            console.log('using queryParamMap:', params.get('name'));
        });
        this.route.paramMap.subscribe((params: ParamMap) => {
            console.log('using paramMap:', params);
            this.id = params.get('id') || '';
            console.log('using paramMap:', this.id);
            console.log('using paramMap:', params.get('optionalRouteParam'));
        });
    }
}
