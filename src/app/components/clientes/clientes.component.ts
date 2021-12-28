import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getClientes();
  }


  getClientes() {
    this.clientes = this.dataService.getClientes();
    console.log(this.clientes);

  }

  deleteCliente(cliente: Cliente) {

    Swal.fire({
      title: 'Eliminar el Cliente?',
      text: `Deseas Eliminar el Cliente ${cliente.nombre} `,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Si eliminar Cliente!'
    }).then((result) => {
      if (result.value) {
        this.dataService.removeCliente(cliente);
        this.getClientes();
        Swal.fire(
          'Eliminar!',
          `Cliente ${cliente.nombre} Eliminado Correctamente.`,
          'success'
        )
      }
    });
  }

}
