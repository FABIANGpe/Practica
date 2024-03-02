import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyecto-final',
  standalone: true,
  imports: [GoogleMapsModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './proyecto-final.component.html',
  styleUrl: './proyecto-final.component.css'
})
export class ProyectoFinalComponent {
  markerPositions=""
    Variable = ''
  formulariouser: FormGroup = new FormGroup(
    {
      name: new FormControl(''),
      descripcion: new FormControl('')

    }


  )
  user: any = {
    name: "",
    descripcion: ""
  }

  users: any = []
  name = ''
  descripcion = ''
  posicion:any={}

  constructor() {


    console.log("se ejecuto");

  }
  ngDoCheck(): void {
    console.log("se ejecuto el check");

  }
  clickButton(text: string) {
    this.Variable = text

  }
  ngOnDestroy() {
    console.log("se inicio el constructor");
  }
  submitForm() {
    let obj = {
...this.formulariouser.value,
posicion:this.posicion

    }
    console.log(obj)   
    this.users.push(obj)
  }
  addToList() {


  }
click(event:any){
this.posicion={ 
lath:event.latLg.lat(),
lng:event.latlng.lng()

}

}
}

