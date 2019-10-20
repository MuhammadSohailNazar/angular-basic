import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  public hasError = false;
  public highlighted = "yellow";
  public titleStyles = {
    color: '#a234f2',
    fontSize: '20px',
    fontFamily: "'Times New Roman', Times, serif"
  };
  constructor() { }

  ngOnInit() {
  }

}
