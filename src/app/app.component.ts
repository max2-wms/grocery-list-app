import { Component } from '@angular/core';

@Component ( {
  selector: 'app-root',
  template: 
  `<div>
  <div>My first component</div>
  <h1> {{pageTitle}}</h1>
  </div>`
})
export class AppComponent {
  pageTitle:string = 'My Grocery List Manager'
}