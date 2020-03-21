import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./fomulario.component.css']
})
export class FomularioComponent implements OnInit {

  public user: any;
  public campo: string;

  constructor() { 
    this.user = {
      nombre : '',
      apellido: '',
      bio: '',
      genero: ''
    };

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Funciona el submit');
    console.log(this.user);
  }

  hazClick() {
    alert('Has dado click!');
  }

  hasSalido() {
    alert("Has salido..!!");
  }
}
