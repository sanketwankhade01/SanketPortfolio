import { viewClassName } from '@angular/compiler';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class PersonalComponent implements OnInit {
  public PortFolioData:any;
  public num:Number=20;
  constructor() { }

  ngOnInit(): void {
    var data=JSON.parse(localStorage.getItem('portfolio-data'));  
    this.PortFolioData=data.personal;
  }

}
