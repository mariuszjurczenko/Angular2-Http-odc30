import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
     <p>Result: {{result}}</p>
     <p>Time: {{time}}</p>
     <p>Error: {{error}}</p>
  `
})
export class AppComponent {

  result;
  time;
  error

  constructor(){
    const startTime = Date.now();
    this.add(2,3, result => {
      this.add(result, -10, result => {
        this.add(result, 10, result => {
        this.result = result;
        this.time = Date.now() - startTime; 
        },error => this.error = error);
      },error => this.error = error);
    },error => this.error = error);
 }

  add(x,y,callback, errorCallback) {
    setTimeout( () => {
      const result = x + y;
      if(result >=0){
        callback(result);
      } else {
        errorCallback('Niewłaściwa wartość : ' + result);
      }
    }, 1000);
  }
}
