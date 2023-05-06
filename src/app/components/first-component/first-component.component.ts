import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})

export class FirstComponentComponent {
  name: string = "Jack";
  age: number = 17;
  job = "Programmer";
  robies = ["jogar", "estudar", "programar"];
  car = {
    marca: "BMW",
    ano: 2030
  }

  constructor() {
    
  }

}