import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  public isSpecialMessage = true;
  public hasError = false;
  public messageClasses = {
    "success-message": !this.hasError,
    "error-message": this.hasError,
    "special-message": this.isSpecialMessage
  }
  constructor() { }

  ngOnInit() {
  }

}
