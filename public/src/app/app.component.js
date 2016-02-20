import {Component} from 'angular2/core';

class AppComponent {
	constructor () {
  }
}

AppComponent.annotations = [
	new Component({
	    selector: "my-app",
	    template: '<h1>My First Angular 2 App</h1>'
	  })
];

export {AppComponent};
