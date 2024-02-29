import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-segundo-dia',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './segundo-dia.component.html',
  styleUrl: './segundo-dia.component.css'
})
export class SegundoDiaComponent {
submitForm() {
throw new Error('Method not implemented.');
}
  Variable = ''
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
console.log("se ejecuto")

}
ngOnInit() {

}
ngDoCheck(): void {
  //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //Add 'implements DoCheck' to the class.
  
}
clickButton(text:string){
this.Variable=text

}


}
