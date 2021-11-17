import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnChanges {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  newServerContent = '';
  @ViewChild('blueprintNameInput') accessVariable: ElementRef;

  constructor() { }

  ngOnChanges() {

  }

  onAddServer(nameInput) {
    console.log(nameInput.value);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.accessVariable.nativeElement.value
    });
  }

  onAddBlueprint(nameInput) {
    this.bluePrintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.accessVariable.nativeElement.value
    });
  }

}
