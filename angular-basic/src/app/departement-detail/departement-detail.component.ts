import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-departement-detail',
  template: `
    <h3>You select departement with id = {{id}}</h3>
  `,
  styles: []
})
export class DepartementDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  public id: Number;
  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));
  }

}
