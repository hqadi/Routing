import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

    constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
    }

    goToChildA(): void {
        this.router.navigate(['child-a'], { relativeTo: this.activatedRoute });
    }

    goToThird(): void {
        this.router.navigate(['someId'], { relativeTo: this.activatedRoute });
    }
}
