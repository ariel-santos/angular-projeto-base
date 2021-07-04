import { Cliente } from './../../../shared/models/cliente.model';
import { ClienteService } from './../../../services/cliente.service';
import { Component, OnInit } from '@angular/core';

declare var M: any;

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {
  clienteList: Cliente[];

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {
    this.clienteService.getClientes().subscribe(
      (res: Cliente[]) => {
        console.log(res);
        this.clienteList = res;
      },
      err => {

      }
    )
  }

  editCliente() {
    console.log('editCliente()');
  }

  openModal() {
    const elem = document.getElementById('modal-confirm-delete');
    M.Modal.init(elem);
    const instance = M.Modal.getInstance(elem);
    instance.open();
  }

  deleteCliente() {
    // this.clienteService.deleteCLiente().subscribe(
    //   (res: any) => {
    //     console.log(res);
    //   }
    // )
  }

}
