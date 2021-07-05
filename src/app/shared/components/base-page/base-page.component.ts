import { UrlPageEnum } from './../../enums/url-pages.enum';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: ''
})
export abstract class BasePageComponent implements OnInit {
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
