import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/internal/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  isHeaderShow:boolean= false;
  constructor(private _router: Router) {
    this._router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event:NavigationEnd)=>{
      if(event.url=='/'){
        this.isHeaderShow= false;
      }else{
        this.isHeaderShow= true;
      }
     });
  }
  title = 'SanetPortfolio';
  get PersonalUrl(){
    return '/portfolio/personal';
  }
  get ProfessionalUrl(){
    return '/portfolio/professional';
  }

}
