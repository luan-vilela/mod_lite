import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  btnActived: number = 0;
  toggle:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  onActived = (num:number) =>{

    this.btnActived = num;
  }
  
}
