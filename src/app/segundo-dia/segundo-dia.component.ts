import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-segundo-dia',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './segundo-dia.component.html',
  styleUrl: './segundo-dia.component.css'
})
export class SegundoDiaComponent {
  Variable = ''
  btn_Class = "btn-btn-success"
  formulariouser:FormGroup = new FormGroup(
{
 name: new FormControl (''),
 descripcion: new FormControl('')

}


  )

  
  users=[
    {
name:'luis 1',
description:'descripcion 1'

    },
    {
name:'pepe 2',
description:'descripcion 2'

    }
  ]
name=''
descripcion = ''
  
constructor(){
console.log("se ejecuto");

}
ngDoCheck(): void {
  console.log("se ejecuto el check");
  
}
clickButton(text:string){
this.Variable=text

}
ngOnDestroy() {
  console.log("se inicio el constructor");
}
submitForm(){
  console.log(this.formulariouser.value)
}

}


