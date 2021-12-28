import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  clientes: Cliente[] = [];
  constructor() { }



  getClientes(): Cliente[] {
    if (localStorage.getItem('clientes') === null) {
      this.clientes = [];
    } else {
      this.clientes = JSON.parse(localStorage.getItem('clientes') || '{}');
    }
    return this.clientes;
  }

  addClientes(cliente: Cliente) {
    this.clientes.unshift(cliente);
    let clientes;
    if (localStorage.getItem('clientes') === null) {
      clientes = [];
      clientes.unshift(cliente);
      localStorage.setItem('clientes', JSON.stringify(clientes));
    } else {
      clientes = JSON.parse(localStorage.getItem('clientes') || '{}');
      clientes.unshift(cliente);
      localStorage.setItem('clientes', JSON.stringify(clientes));
    }
  }

  removeCliente(cliente: Cliente) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (cliente == this.clientes[i]) {
        this.clientes.splice(i, 1);
        localStorage.setItem('clientes', JSON.stringify(this.clientes));
      }

    }
  }
}
