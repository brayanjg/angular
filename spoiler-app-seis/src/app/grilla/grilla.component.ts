import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit {
  nombreClase = 'alert alert-primary';
  constructor() { }

  ngOnInit() {
  }
  cambiarColor(){
    if (this.nombreClase='alert alert-primary'){
      this.nombreClase= 'alert alert-secondary'
    }
    else{
      this.nombreClase= 'alert alert-primary'
    }

  }
}
