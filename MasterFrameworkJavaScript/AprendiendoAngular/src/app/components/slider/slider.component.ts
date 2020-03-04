import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  //Importamos el valor nombre que se ha pasado desde el componente padre, es decir el componente app
  @Input() public nombre:string;
  @Input() size:string;

  constructor() { }

  ngOnInit(): void {
  }

}
