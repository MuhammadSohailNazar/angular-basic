import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <div> 
      Inline template 
    </div>`,
  styles: [`
    div {
      color: green
    }`]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
