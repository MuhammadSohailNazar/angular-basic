import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'
@Component({
  selector: 'app-departement-detail',
  template: `
    <h3>You select departement with id = {{id}}</h3>

    <p>
    <button (click)="ShowOverview()"> Overview</button>
    <button (click)="ShowContact()"> Contact</button>
    </p>
    <router-outlet></router-outlet>
    <p>
    <button (click)="goPrevious()"> Previous</button>
    <button (click)="goNext()"> Next</button>
    </p>
    

    <div>
    <button (click)="goToDepartements()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartementDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  public id: number;
  ngOnInit() {
    //this.id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get("id"));
    });
  }
  goPrevious() {
    let previousId = (this.id - 1);
    this.router.navigate(["/departements", previousId]);
  }
  goNext() {

    let nextId = (this.id + 1);
    this.router.navigate(["/departements", nextId]);
  }

  goToDepartements() {
    let selectedId = this.id ? this.id : null;
    //this.router.navigate(["/departements", { id: selectedId }]);
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }

  ShowOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route });
  }

  ShowContact() {
    this.router.navigate(['contact'], { relativeTo: this.route });
  }

}
