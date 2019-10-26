import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-departement-list',
  template: `
    <h3>
      Departement List
    </h3>
    <ul class="items" >
    <li class="badge" (click)="onSelect(dep)" *ngFor="let dep of departements"> {{dep.id + ")."}} {{dep.name}}</li>
    </ul>
  `,
  styles: [`.items  {
    background: #bb1606;
    padding: 20px;
    display: block;
    list-style-type: none;
    color: white;
    width: 95px;
}

`]
})
export class DepartementListComponent implements OnInit {

  constructor(private router: Router) { }
  public departements = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Node" },
    { "id": 3, "name": "MongoDB" },
    { "id": 4, "name": "Ruby" },
    { "id": 5, "name": "Bootstrap" },
  ];
  ngOnInit() {
  }

  onSelect(departement) {
    this.router.navigate(["/departement", departement.id]);
  }

}
