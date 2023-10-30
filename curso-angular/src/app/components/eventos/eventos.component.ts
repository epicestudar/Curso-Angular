import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  show: boolean = true;

  showMessage(): void{
    this.show = !this.show; // toggle
  }
  showGoiabado(): void{
    this.show = !this.show;
  }
}
