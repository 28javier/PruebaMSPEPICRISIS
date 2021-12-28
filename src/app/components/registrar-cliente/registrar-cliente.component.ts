import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
import { Cliente } from '../../interfaces/cliente.interface';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    cedula: [, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    nombre: ['', [Validators.required]],
    edad: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder, private dataService: DataService, private rt: Router
  ) { }

  ngOnInit(): void {
  }

  validarCampos(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  addCliente() {
    if (this.miFormulario.invalid) {
      return this.miFormulario.markAllAsTouched();
    }
    this.dataService.addClientes(this.miFormulario.value);
    this.rt.navigateByUrl('/');
    Swal.fire('Registrado', 'Cliente Registrado Correctamente', 'success');
    // console.log(this.miFormulario.value);
    // this.miFormulario.reset();
  }

}
