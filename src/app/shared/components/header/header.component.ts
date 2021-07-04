import { UrlPageEnum } from './../../enums/url-pages.enum';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  eUrlPageEnum = UrlPageEnum;

  constructor(
    protected router: Router
  ) { }

  ngOnInit(): void {
  }

  gotoPage( page: string ){
    this.router.navigate([page]);
  }
}
