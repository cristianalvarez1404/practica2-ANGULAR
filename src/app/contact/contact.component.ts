import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy{

  formularioContacto:FormGroup;
  tipoDni:string = 'DNI'
  mostrarDNI:boolean = false;
  // usuarioActivo:{nombre:string,apellido:string,dni:string | number} = {
  //   nombre:'Pedro',
  //   apellido:'Perez',
  //   dni:'123456789'
  // }

  constructor(private form:FormBuilder){
    this.formularioContacto = this.form.group({
      nombre:['',[Validators.required,Validators.minLength(3)]],
      apellido:['',[Validators.required,Validators.minLength(3)]],
      tipoDni:[''],
      email:['',[Validators.required,Validators.email]]
    })
  }

  ngOnInit(): void {
    this.formularioContacto.get('nombre')?.setValue('Juan');
    this.formularioContacto.get('nombre')?.disable();
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe((value) => {
      this.mostrarDNI = value != '' 
      this.tipoDni = value
    })
  }

  ngOnDestroy(): void {
    console.log('se destruyo el componente al cambiar de page')
  }
  

  // ngOnInit(): void {
  //   // this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo)

  //   // this.formularioContacto.get('apellido')?.setValidators([Validators.required,Validators.minLength(3)])
  //   this.formularioContacto.get('apellido')?.clearValidators()
  //   this.formularioContacto.get('apellido')?.updateValueAndValidity()
  //   this.formularioContacto.patchValue({
  //     nombre:this.usuarioActivo.nombre,
  //     // apellido:this.usuarioActivo.apellido,
  //     dni:this.usuarioActivo.dni
  //   })
  //   this.formularioContacto.get('nombre')?.disable()
  //   // this.formularioContacto.get('apellido')?.disable()
  //   this.formularioContacto.get('dni')?.disable()
  // }

  hasErrors(controlName:string, errorType:string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }

  enviar(){
    console.log(this.formularioContacto)
  }


  // public usuario:any = {
  //   nombre:'',
  //   email:''
  // }

  // enviar(){
  //   console.log(this.usuario)
  // }
}
