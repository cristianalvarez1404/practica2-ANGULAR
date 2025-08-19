import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnChanges {

  @Input() tipoDni:string = 'DNI'
  formularioDocument:FormGroup;
  
  variableNueva:string = 'DNI'

  constructor(private form:FormBuilder){
    this.formularioDocument = this.form.group({
      dni:[''],
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.variableNueva = changes?.['tipoDni'].currentValue 
  }

  hasErrors(controlName:string, errorType:string){
    return this.formularioDocument.get(controlName)?.hasError(errorType) && this.formularioDocument.get(controlName)?.touched
  }
}
