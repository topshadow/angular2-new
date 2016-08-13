import {Component} from '@angular/core';

@Component({
	selector:`my-app`,
	template:`this is my app
	<a routerLink="/index">index page</a>
	<router-outlet></router-outlet>
	`
})
export class AppComponent{
	
}