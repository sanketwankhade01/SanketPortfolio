import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {
  public PortFolioData:any;
  constructor() { }

  ngOnInit(): void {
    var data=JSON.parse(localStorage.getItem('portfolio-data'));  
    this.PortFolioData=data.professional;
  }

}
