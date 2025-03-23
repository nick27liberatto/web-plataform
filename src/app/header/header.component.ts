import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logo:string = "./assets/PLUMA_BLACK_LOGO.png";
  mouseOver(){
    this.logo = "./assets/PLUMA_WHITE_LOGO.png";
  }
  mouseOut(){
    this.logo = "./assets/PLUMA_BLACK_LOGO.png";
  }
  }
