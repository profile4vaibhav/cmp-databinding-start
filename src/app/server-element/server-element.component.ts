import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent
  implements
    OnChanges, OnInit,
    DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit,
    AfterViewChecked, OnDestroy {
  @Input() element: {name: string, type: string, content: string};

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('ngOnChanges called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {

  }

  ngAfterContentChecked() {

  }

  ngAfterViewInit() {

  }

  ngAfterViewChecked() {

  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
