import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasePageComponent } from 'src/app/shared/components/base-page/base-page.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent extends BasePageComponent implements OnInit {

  constructor(
    protected router: Router
  ) {
    super(router);
  }

  ngOnInit(): void {
  }

}
