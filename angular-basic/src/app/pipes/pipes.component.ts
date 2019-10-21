import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public name = "muhammad sohail nazar";
  public person = { firstName: "Sohail", lastName: "Nazar" };
  public date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
