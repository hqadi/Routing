import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'routing-app';
    firstPath = '/first-component';

    constructor(private router: Router) { }

    goToFirstComponent(): void {
        this.router.navigate(['first-component', { optionalRouteParam: 'value' }]);
    }

    goToSecondComponent(): void {
        // this.router.navigate(['second-component/hala']);
        this.router.navigate(['second-component', 'hala', { optionalRouteParam: 'value' }],
            { queryParams: { name: 'someName', age: 10 } });
    }
}
