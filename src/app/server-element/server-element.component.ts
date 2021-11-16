import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {
  @Input() element: {name: string, type: string, content: string};

  @Input('customer') myName: string;

  constructor() {
    console.log(this.element);
  }
}
