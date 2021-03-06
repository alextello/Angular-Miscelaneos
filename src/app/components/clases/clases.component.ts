import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {
  
  alerta = 'alert-danger';
  propiedades = {
    danger: false
  };
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

}
