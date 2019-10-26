import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
@Component({
  selector: 'app-departement-list',
  template: `
    <h3>
      Departement List
    </h3>
    <ul class="" >
    <li class="items" [class.selected]="isSelected(dep)" (click)="onSelect(dep)" *ngFor="let dep of departements"> {{dep.id + ")."}} {{dep.name}}</li>
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
.selected{
  background: #110006;
}
`]
})
export class DepartementListComponent implements OnInit {

  public selectedId;
  constructor(private router: Router, private route: ActivatedRoute) { }
  public departements = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Node" },
    { "id": 3, "name": "MongoDB" },
    { "id": 4, "name": "Ruby" },
    { "id": 5, "name": "Bootstrap" },
  ];
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get("id"));
    });
  }

  onSelect(departement) {
    this.router.navigate(["/departement", departement.id]);
  }

  isSelected(departement) {
    return this.selectedId === departement.id;
  }

}
