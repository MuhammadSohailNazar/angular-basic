import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  public name = "Sohail";
  constructor() { }

  ngOnInit() {
  }

  greetingUser() {
    return "Hello " + this.name;
  }
}
